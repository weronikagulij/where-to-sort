const mongoose = require('mongoose');

const PointSchema = mongoose.Schema({
    pointType: {
        type: String,
        enum: ['cups', 'batteries', 'electronics'],
        required: true
    },
    address: {
        type: String,
        required: true
    },
    latitude: {
        type: Number,
        required: true
    },
    longitude: {
        type: Number,
        required: true
    },
    imgUrl: {
        type: String,
        default: 'https://imgur.com/wqGtX16'
    },
    description: String,
    added: {
        type: Date,
        default: Date.now()
    },
    userWhoAdded: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('Point', PointSchema);
