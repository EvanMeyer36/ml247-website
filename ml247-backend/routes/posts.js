const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// Create a new post
router.post('/', async (req, res) => {
  try {
    const newPost = new Post(req.body);
    const saved = await newPost.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all posts (for display)
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
module.exports = router;