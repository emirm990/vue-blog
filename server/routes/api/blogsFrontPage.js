const express = require("express");
const mongodb = require("mongodb");
const test = require('assert');
const router = express.Router();

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admindb:Bzr9I04nau05tRzz@vue-zep8s.mongodb.net/test?retryWrites=true&w=majority";
MongoClient.connect(uri, {
  useUnifiedTopology: true,
  useNewUrlParser: true
},
  function (err, client) {

    if (err) {
      return console.log('Error: could not connect to mongodb')
    }

    // Use the admin database for the operation
    var adminDb = client.db('vue_express').admin()
    // Add the new user to the admin database
    adminDb.addUser('korisnik', 'korisnik', {
      roles: [{
        role: "userAdmin",
        db: 'vue_express'
      }]
    },
      function (err, result) {

        if (err) {
          return console.log(err)
        }

        // Authenticate using the newly added user
        adminDb.authenticate(userName, userPassword, function (err, result) {

          if (err) {
            return console.log('Error: could authenticate with created user')
          }

          console.log('Ok')
          db.close()
        })
      })
  })


router.get("/", async (req, res) => {
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
