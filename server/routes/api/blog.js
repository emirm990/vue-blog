const express = require("express");
const mongodb = require("mongodb");

const router = express.Router();

router.get("/blog/:id", async (req, res) => {
  console.log(req.route);
  const blogs = await loadBlogsCollection();
  res.send(
    await blogs
      .db("vue_express")
      .collection("posts")
      .findOne({ _id: new mongodb.ObjectID(req.params.id) })
  );
  //blogs.db("vue_express").close();
});
async function loadBlogsCollection() {
  const client = await mongodb.MongoClient.connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });

  return client.db("vue_express").collection("posts");
}
