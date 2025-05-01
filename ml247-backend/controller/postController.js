const Post = require('../models/Post');

// Get all posts
exports.getPosts = async (req, res) => {
  const posts = await Post.find().sort({ createdAt: -1 });
  res.json(posts);
};

// Get one post
exports.getPost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.json(post);
};

// Create post
exports.createPost = async (req, res) => {
  const newPost = new Post(req.body);
  const saved = await newPost.save();
  res.status(201).json(saved);
};

// Update post
exports.updatePost = async (req, res) => {
  const updated = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

// Delete post
exports.deletePost = async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);
  res.json({ message: 'Post deleted' });
};
