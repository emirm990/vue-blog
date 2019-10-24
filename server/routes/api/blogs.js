const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

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
	const client = await mongodb.MongoClient.connect(
		'mongodb+srv://dincica:dincica@vue-zep8s.mongodb.net/test?retryWrites=true&w=majority',
		{
			useNewUrlParser: true
		}
	);

	return client.db('vue_express').collection('posts');
}

module.exports = router;
