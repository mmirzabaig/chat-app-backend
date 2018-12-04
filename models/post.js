const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  topic: String,
  description: String,
  category: String,
});



module.exports = mongoose.model('Post', PostSchema);
