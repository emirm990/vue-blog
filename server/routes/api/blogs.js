const express = require('express');
const mongodb = require('mongodb');
const MongoClient = require('mongodb').MongoClient;
const router = express.Router();
let username = 'user';
let password = 'user';
let url = 'mongodb+srv://' + username + ':' + password + '@vue-zep8s.mongodb.net/test?retryWrites=true&w=majority';
router.post('/login', async (req, res) => {
	try {
		const response = await loadUser(req.body.username, req.body.password);
		if (response.topology.s.connected) {
			res.status(200).send('logged');
		} else {
			res.status(403).send('forbidden');
		}
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
			comments: []
		});
		res.status(201).send('Posted');
	}
});

router.delete('/', async (req, res) => {
	const blogs = await loadBlogsCollection();
	try {
		await blogs.deleteOne({ _id: new mongodb.ObjectID(req.body.id) });
		res.status(200).send('Deleted');
	} catch (err) {
		console.log('mongo: ', err);
		res.status(401).json({ data: 'forbidden' });
	}
});
async function loadBlogsCollection() {
	const client = await mongodb.MongoClient.connect(url, {
		useUnifiedTopology: true,
		useNewUrlParser: true
	});

	return client.db('vue_express').collection('posts');
}
async function loadUser(username, password) {
	url = 'mongodb+srv://' + username + ':' + password + '@vue-zep8s.mongodb.net/test?retryWrites=true&w=majority';
	try {
		const client = await mongodb.MongoClient.connect(url, {
			useUnifiedTopology: true,
			useNewUrlParser: true,
			connectTimeoutMS: 5000,
			socketTimeoutMS: 500,
			serverSelectionTimeoutMS: 5000
		});
		return client;
	} catch (err) {
		return err;
	}

	//console.log(client);
}

module.exports = router;
