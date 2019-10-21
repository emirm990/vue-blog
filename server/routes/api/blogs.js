const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Get Blogs

router.get('/', async (req, res) => {
	const blogs = await loadBlogsCollection();
	res.send(await blogs.find({}).toArray());
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
