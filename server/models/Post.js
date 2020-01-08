const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    title: String
});

// const Joi = require('joi');

// const Post = {
//     title: Joi.string()
//         .min(3)
//         .required()
// };

module.exports = mongoose.model('Posts', PostSchema);
// module.exports = Post;
