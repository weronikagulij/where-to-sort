const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

const app = express();
const postsRoute = require('./routes/posts');
const db = mongoose.connection;

app.use(bodyParser.json());
app.use('/posts', postsRoute);

app.get('/', (req, res) => {
    res.send('we are on homeee');
});

mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Connection Successful!');
});

app.listen(3000);
