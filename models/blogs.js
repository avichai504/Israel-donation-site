const mongoose = require("mongoose");
const Schema = mongoose.Schema; // this is a construction function

const blogSchema = new Schema(
  {
    title: { type: String, require: true },
    snippet: { type: String, require: true },
    body: { type: String, require: true },
    likes: {type: Number, default: 0},
  },
  { timestamps: true }
);

// create a model base on the schema
const Blog = mongoose.model('Blog', blogSchema) // the model will wrap the schema and will provide an interface to the data

module.exports = Blog;