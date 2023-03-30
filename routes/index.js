var express = require('express');
var router = express.Router();

/* GET home page.*/
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SupraCraft' });
});

router.get('/helpcenter', function(req, res, next) {
  res.render('helpcenter', { title: 'SupraCraft | HELP-CENTER' });
});
router.get('/helpcenter/how-to/register', function(req, res, next) {
  res.render('howto/register', { title: 'SupraCraft | HELP-CENTER' });
});

router.get('/helpcenter/how-to/login', function(req, res, next) {
  res.render('howto/login', { title: 'SupraCraft | HELP-CENTER' });
});

router.get('/helpcenter/rules', function(req, res, next) {
  res.render('rules', { title: 'Normativa' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Sobre Nosotros | SupraCraft Network' });
});
module.exports = router;
