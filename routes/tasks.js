var express = require('express');
var Task = require('../models/Task')

var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {


    Task.create(new Task({name: "hello"}), function (err, result) {
        if (err) next(err);
        console.log(result);
    });

    Task.find({}, function (err, result) {
        if (err) next(err);
        console.log(result);
    });


    res.send('respond with a resource');
});

module.exports = router;
