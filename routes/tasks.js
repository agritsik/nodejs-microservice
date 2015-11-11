var express = require('express');
var Task = require('../models/Task')

var router = express.Router();

// create
router.post('/', function (req, res, next) {
    Task.create(new Task({name: req.body.name}), function (err, result) {
        if (err) next(err);
        res.status(201).end();
    });
});

// get by id
router.get('/:id', function (req, res, next) {
    Task.findOne({_id: req.params.id}, function (err, result) {
        if (err) next(err);
        res.json(result);
    })
});

// get all
router.get('/', function (req, res, next) {
    Task.find({}, function (err, result) {
        if (err) next(err);
        res.json(result);
    });
});

// update
router.put('/:id', function (req, res, next) {
    Task.update({_id: req.params.id}, {$set: {name: req.body.name}}, function (err, result) {
        if (err) next(err);
        res.status(204).end();
    });
});

// delete
router.delete('/:id', function (req, res, next) {
    Task.remove({_id: req.params.id}, function (err, result) {
        if (err) next(err);
        res.status(204).end();
    })
})


module.exports = router;
