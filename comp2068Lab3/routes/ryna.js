'use strict';
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
    res.render('family', {
        name: 'Ryna', bod: 'September 14, 2004', description: 'Ryna is a lovely soul who love art. Ryna likes swimming, drawing and dancing' });
});

module.exports = router;
