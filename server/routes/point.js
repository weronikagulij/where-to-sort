const express = require('express');
const router = express.Router();
const Point = require('../models/Point');

// get all points
router.get('/', async (req, res) => {
    try {
        const points = await Point.find();
        res.json(points);
    } catch (err) {
        res.json({ message: err });
    }
});

// get specific point with details
router.get('/:id', async (req, res) => {
    try {
        const point = await Point.findById(req.params.id);
        res.json(point);
    } catch (err) {
        res.json({ message: err });
    }
});

// add point
router.post('/add', async (req, res) => {
    try {
        const point = new Point(req.body);

        const savedPoint = await point.save();
        res.json(savedPoint);
        // to do: send e-mail
    } catch (err) {
        res.json({ message: err });
    }
});

// confirm e-mail

// delete point
router.delete('/:id', async (req, res) => {
    try {
        const removedPoint = await Point.remove({ _id: req.params.id });
        res.json(removedPoint);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;
