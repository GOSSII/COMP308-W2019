let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About' });
});

router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact' });
});

router.get('/product', function(req, res, next) {
  res.render('index', { title: 'Product' });
});

router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services' });
});
module.exports = router;
