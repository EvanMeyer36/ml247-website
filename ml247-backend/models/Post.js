const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  type: { type: String, enum: ['blog', 'video', 'newsletter', 'announcement'], required: true },
  content: { type: String }, // Quill HTML output
  videoUrl: { type: String }, // optional
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Post', PostSchema);