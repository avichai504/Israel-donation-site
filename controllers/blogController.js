// controllers/blogController.js

const Blog = require("../models/blogs");

// GET all blogs to the index page
const blog_index = async (req, res) => {
  const blogs = await Blog.find().sort({ createdAt: -1 });
  res.render("blogs/index", { title: "All", blogs });
};

// find by ID
const blog_details = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    res.render("blogs/details", { blog, title: "Details" });
  } catch {
    res.status(404).render("404", { title: "Page Not Found" });
  }
};

// create new blog page
const blog_create_get = (req, res) => {
  try {
    res.render("blogs/create", { title: "Create a new donation" });
  } catch {
    res.status(404).render("404", { title: "Page Not Found" });
  }
};

// POST new blog
const blog_create_post = async (req, res) => {
  try {
    const blog = new Blog(req.body);
    await blog.save();
    res.redirect("/");
  } catch {
    res.status(404).render("404", { title: "Page Not Found" });
  }
};

// POST like
const blog_add_like = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    blog.likes = (blog.likes || 0) + 1;
    await blog.save();
    res.json({ likes: blog.likes });
  } catch {
    res.status(404).render("404", { title: "Page Not Found" });
  }
};

// DELETE
const blog_delete = async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.json({ redirect: "/" });
  } catch {
    res.status(404).render("404", { title: "Page Not Found" });
  }
};

module.exports = {
  blog_index,
  blog_details,
  blog_create_get,
  blog_create_post,
  blog_delete,
  blog_add_like,
};
