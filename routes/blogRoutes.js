const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogController");

// Create page
router.get("/create", blogController.blog_create_get);

// POST new blog
router.post("/", blogController.blog_create_post);

// POST add like
router.post("/like/:id", blogController.blog_add_like);

// GET blog details
router.get("/:id", blogController.blog_details);

// GET all blogs
router.get("/", blogController.blog_index);

// DELETE blog
router.delete("/:id", blogController.blog_delete);

// 404 blogs
// NOT HERE...

module.exports = router;
