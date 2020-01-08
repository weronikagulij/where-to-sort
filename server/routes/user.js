const express = require('express');
const router = express.Router();
const User = require('../models/User');

// get all users
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.json({ message: err });
    }
});

// get specific user
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.json(user);
    } catch (err) {
        res.json({ message: err });
    }
});

// add user
router.post('/add', async (req, res) => {
    try {
        if (
            !req.body.passwordConfirm ||
            req.body.password !== req.body.passwordConfirm
        )
            throw 'Password and password confirmation cannot be different!';
        const user = new User({
            email: req.body.email,
            password: req.body.password
        });

        const savedUser = await user.save();
        res.json(savedUser);
        // to do: send e-mail
    } catch (err) {
        if (err.name === 'MongoError' && err.code === 11000) {
            res.json({
                message: {
                    ...err,
                    errmsg: 'Email must be unique',
                    name: 'ValidationError'
                }
            });
            return;
        }
        res.json({ message: err });
    }
});

// confirm e-mail

// delete user
router.delete('/:id', async (req, res) => {
    try {
        const removedUser = await User.remove({ _id: req.params.id });
        res.json(removedUser);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;
