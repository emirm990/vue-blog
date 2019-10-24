const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

router.get('/:id*?', async (req, res) => {
	const blogs = await loadBlogsCollection();
	res.send(await blogs.find({}).sort({ createdAt: -1 }).toArray());
});
async function loadBlogsCollection() {
	const client = await mongodb.MongoClient.connect(
		'mongodb+srv://user:user@vue-zep8s.mongodb.net/test?retryWrites=true&w=majority',
		{
			useNewUrlParser: true
		}
	);

	return client.db('vue_express').collection('posts');
}

module.exports = router;
