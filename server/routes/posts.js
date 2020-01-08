const express = require('express');
const Joi = require('joi');
const router = express.Router();
const Post = require('../models/Post');

router.get('/', (req, res) => {
    res.send('we are on posts');
});

router.post('/', async (req, res) => {
    const post = new Post(req.body);

    // const result = Joi.validate(req.body, Post);
    // console.log(result);

    // if (result.error) {
    //     res.status(400).send({ message: result.error.details[0].message });
    //     return;
    // } else {
    //     res.send(result.value);
    // }

    // console.log(post);
    //    const savedPost = post.save(function(err) {
    //         if (err) return handleError(err);
    //         else res.json({ msg: 'hurra' });
    //         // saved!
    //     })
    //         .then(data => {
    //             console.log('kupa');
    //             res.json(data);
    //         })
    //         .catch(err => {
    //             console.log('fff');
    //             res.json({ msg: err });
    //         });
    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;
