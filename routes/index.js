var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/cool', function(req, res, next) {
  res.render('index', { title: 'Eres genial!!' });
});

module.exports = router;
