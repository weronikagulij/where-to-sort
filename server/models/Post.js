const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    title: String
});

module.exports = mongoose.model('Posts', PostSchema);
