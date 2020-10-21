const express = require('express');
const router = express.Router();
const User = require('../models/User');

// let auth = (req,res,next)=>{
//     // let token = req.cookies.ths_auth;​
//     User.findByToken(token,(err,user)=>{
//         if (err) {
//             throw err;
//         }

//         if (!user) {
//             return res.json({
//             message: 'User not authenticated',
//             error : true
//             });
//         }

//         // req.token = token;
//         req.user = user;
//         next();
//     });​
// }

/**
 * get all users
 */ 
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.json({ message: err });
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
router.post('/users/login', (req, res) => {
    User.findOne({ email: req.body.email }, (err, user) => {
        if (!user) {
            return res.json({ message: err })
        }
        
        user.comparePassword(req.body.password, (err, isMatch) => {
            if (!isMatch) {
                return res.json({ message: err });
            }
            
            user.generateToken((err, user2) => {
                if (err) {
                    return res.status(400).send(err);
                }

                res.cookie('ths_auth', user2.token).status(200).json({"Login Success":"True"});
            })
        });
    });
});

/**
 * Authenticate user
 */
router.get("/auth", (req,res) => {
    res.json({
        user : req.user
    })
});


/**
 * Logout user
 */
router.post('/users/logout', async (req, res) => {
    try {
        const user = User.findOneAndUpdate(
            { _id : req.user._id, token: req.cookies.ths_auth },
            { token:'' }
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
