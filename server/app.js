const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

const app = express();
const postsRoute = require('./routes/posts');

app.use(bodyParser.json());

app.use('/posts', postsRoute);

app.get('/', (req, res) => {
    res.send('we are on homeee');
});

mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
    console.log('Connection Successful!');

    // // define Schema
    // var BookSchema = mongoose.Schema({
    //     name: String,
    //     price: Number,
    //     quantity: Number
    // });

    // // compile schema to model
    // var Book = mongoose.model('Book', BookSchema, 'bookstore');

    // // a document instance
    // var book1 = new Book({
    //     name: 'Introduction to Mongoose',
    //     price: 10,
    //     quantity: 25
    // });

    // // save model to database
    // book1.save(function(err, book) {
    //     if (err) return console.error(err);
    //     console.log(book.name + ' saved to bookstore collection.');
    // });
});

// const post = mongoose.Schema({
//     title: {
//         type: String,
//         required: true
//     },
//     date: {
//         type: Date,
//         default: Date.now
//     }
// });

// post.save()
//     .then(data => {
//         console.log('dfd');
//     })
//     .catch(err => {
//         console.log('dfddd');
//     });

app.listen(3000);
