const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();
let username = 'user';
let password = 'user';
let url = 'mongodb+srv://' + username + ':' + password + '@vue-zep8s.mongodb.net/test?retryWrites=true&w=majority';
router.post('/login', async (req, res) => {
	try {
		url =
			'mongodb+srv://' +
			req.body.username +
			':' +
			req.body.password +
			'@vue-zep8s.mongodb.net/test?retryWrites=true&w=majority';
		const logs = await loadUser();
		const collection = logs.db('vue_express').collection('posts');
		collection.authenticate(req.body.username, req.body.password, function(err, result) {
			console.log(result);
		});

		res.status(200).send('logged');
	} catch (err) {
		res.status(500).send(err);
	}
});

router.get('/:id*?', async (req, res) => {
	if (req.query.id) {
		const blogs = await loadBlogsCollection();
		res.send(await blogs.findOne({ _id: new mongodb.ObjectID(req.query.id) }));
	} else {
		const blogs = await loadBlogsCollection();
		res.send(await blogs.find({}).sort({ createdAt: -1 }).toArray());
	}
});

// Add Post

router.post('/', async (req, res) => {
	const blogs = await loadBlogsCollection();
	if (req.body.id) {
		await blogs.findOneAndUpdate(
			{ _id: new mongodb.ObjectID(req.body.id) },
			{
				$set: {
					title: req.body.title,
					text: req.body.text
				}
			}
		);
		res.status(201).send('Updated');
	} else {
		await blogs.insertOne({
			title: req.body.title,
			text: req.body.text,
			createdAt: new Date(),
			comments: ''
		});
		res.status(201).send('Posted');
	}
});

router.delete('/', async (req, res) => {
	const blogs = await loadBlogsCollection();
	await blogs.deleteOne({ _id: new mongodb.ObjectID(req.body.id) });
	res.status(200).send('Deleted');
});
async function loadBlogsCollection() {
	const client = await mongodb.MongoClient.connect(url, {
		useUnifiedTopology: true,
		useNewUrlParser: true
	});

	return client.db('vue_express').collection('posts');
}
async function loadUser() {
	const client = await mongodb.MongoClient.connect(url, {
		useUnifiedTopology: true,
		useNewUrlParser: true
	});

	return client;
}

module.exports = router;
