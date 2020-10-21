const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { auth } = require('../middleware/auth'); 

/**
 * get all users
 */ 
router.get('/', async (req, res) => {
    try {
        console.log('10')
        const users = await User.find();
        console.log('11')
        res.json(users);
    } catch (err) {
        res.json({ message: err });
    }
});

/**
 * Authorizate user
 */
router.get('/auth', auth, async (req, res) => {
    try {
        res.json(req.user);
    } catch (e) {
        res.json({ message: e });
    }
});

/**
 * get specific user
 */
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.json(user);
    } catch (err) {
        res.json({ message: err });
    }
});

/**
 * add user
 */
router.post('/add', async (req, res) => {
    try {
        if (
            !req.body.passwordConfirm ||
            req.body.password !== req.body.passwordConfirm
        ) {
            throw 'Password and password confirmation cannot be different!';
        }

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

/**
 * Login user
 */
router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });

        if ( user ) {
            const isUser = await user.comparePassword(req.body.password);
            if ( isUser ) {
                const userWithToken = await user.generateToken();
                return res.json(userWithToken); 
            } else {
                return res.json({ message: 'Password is incorrect' });  
            }
        } else {
            return res.json({ message: 'User with given email not found' }); 
        }
    } catch (e) {

    }
});

/**
 * Logout user
 */
router.post('/users/logout', async (req, res) => {
    try {
        const user = User.findOneAndUpdate(
            { _id: req.user._id, token: req.cookies.ths_auth },
            { token: '' }
        );
        res.json(user);
    } catch (e) {
        res.json({ message: err });
    }
});

/**
 * delete user
 */
router.delete('/:id', async (req, res) => {
    try {
        const removedUser = await User.remove({ _id: req.params.id });
        res.json(removedUser);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;
