'use strict';
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
    res.render('family', { name: 'Shinhee',bod:'March 25, 1990',description : 'Shinhee is a enthusiastic programer who love to develop herself. Shinhee is likes paiting, Reading and lestening Jazz music' });
});

module.exports = router;
