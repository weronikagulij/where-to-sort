const express = require('express');
const Joi = require('joi');
const router = express.Router();
const Post = require('../models/Post');

router.get('/', (req, res) => {
    res.send('we are on posts');
});

router.post('/', async (req, res) => {
    const post = new Post(req.body);

    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;
