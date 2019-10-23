const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Get Blogs
router.get('/:id', async (req, res) => {
	const blogs = await loadBlogsCollection();
	const id = req.query.id;
	res.send(id);
	res.end();
});
router.get('/:id', async (req, res) => {
	const blogs = await loadBlogsCollection();
	res.send(await blogs.find({}).sort({ createdAt: -1 }).toArray());
});

// Add Post

router.post('/', async (req, res) => {
	const blogs = await loadBlogsCollection();
	await blogs.insertOne({
		title: req.body.title,
		text: req.body.text,
		createdAt: new Date(),
		comments: ''
	});
	res.status(201).send('Posted');
});
router.delete('/', async (req, res) => {
	const blogs = await loadBlogsCollection();
	await blogs.deleteOne({ _id: new mongodb.ObjectID(req.body.id) });
	res.status(200).send();
});
async function loadBlogsCollection() {
	const client = await mongodb.MongoClient.connect(
		'mongodb+srv://admin:admin@vue-zep8s.mongodb.net/test?retryWrites=true&w=majority',
		{
			useNewUrlParser: true
		}
	);

	return client.db('vue_express').collection('posts');
}

module.exports = router;
