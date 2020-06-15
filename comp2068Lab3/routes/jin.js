'use strict';
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
    res.render('family', {
        name: 'Jin', bod: 'Jan 01, 1983', description: 'Jin is a passionate data scientist who eager to expand his knowledge. Jin likes Reading, making puzzles and cooking.'
    });
});

module.exports = router;
