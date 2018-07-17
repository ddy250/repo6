var express = require('express');
var router = express.Router();

var information = require('../info');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('users', { information: information });
});

module.exports = router;
