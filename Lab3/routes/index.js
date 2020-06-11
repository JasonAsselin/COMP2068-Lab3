'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Welcome to my family members home page' });
});

/* GET Jason's page. */
router.get('/jason', function (req, res) {
    res.render('jason', { title: 'Welcome to Jason\'s page' });
});

/* GET Rob's page. */
router.get('/rob', function (req, res) {
    res.render('rob', { title: 'Welcome to Rob\'s homepage' });
});

/* GET Mel's page. */
router.get('/mel', function (req, res) {
    res.render('mel', { title: 'Welcome to Mel\'s homepage' });
});

module.exports = router;
