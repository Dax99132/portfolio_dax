const mongoose = require('mongoose');

const DesignSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String }, // e.g. UI/UX, Poster, etc.
  image: { type: String, required: true }, // design image path
  description: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Design', DesignSchema);
