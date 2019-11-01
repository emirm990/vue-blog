const express = require("express");
const mongodb = require("mongodb");

const router = express.Router();

router.get("/", async (req, res) => {
  console.log(req.route);
  if (req.query.id) {
    const blogs = await loadBlogsCollectionComment();
    res.send(
      await blogs
        .db("vue_express")
        .collection("posts")
        .findOneAndUpdate(
          { _id: new mongodb.ObjectID(req.query.id) },
          {
            $push: {
              comments: {
                name: req.query.name,
                comment: req.query.text,
                date: new Date()
              }
            }
          }
        )
    );
    blogs.close();
  } else {
    const blogs = await loadBlogsCollection();
    res.send(
      await blogs
        .db("vue_express")
        .collection("posts")
        .find({})
        .sort({ createdAt: -1 })
        .toArray()
    );
    blogs.close();
  }
});
async function loadBlogsCollection() {
  const client = await mongodb.MongoClient.connect(
    "mongodb+srv://user:user@vue-zep8s.mongodb.net/test?retryWrites=true&w=majority",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true
    }
  );
  //console.log(client);
  return client;
}
async function loadBlogsCollectionComment() {
  const client = await mongodb.MongoClient.connect(
    "mongodb+srv://dincica:dincica@vue-zep8s.mongodb.net/test?retryWrites=true&w=majority",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true
    }
  );

  return client;
}
module.exports = router;
