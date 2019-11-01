const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Middleware

app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());

const blogs = require("./routes/api/blogs");
const blog = require("./routes/api/blogs");
const blogsFront = require("./routes/api/blogsFrontPage");

app.use("/api/blogs", blogs);
app.use("/api/blogsFrontPage", blogsFront);
app.use("/api/blog", blog);
// Handle production

if (process.env.NODE_ENV === "production") {
  // Static folder
  app.use(express.static(__dirname + "/public"));

  // Handle SPA
  app.get(/.*/, (req, res) => res.sendFile(__dirname + "/public/index.html"));
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
