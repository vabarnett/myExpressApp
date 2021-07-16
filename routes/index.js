var express = require('express');
var router = express.Router();

router.use(express.static('public'));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//adding an additional page for testing
router.get('/test', function(req, res) {
  res.render('testPage1', {title: 'Test 1'});
});

//route for button page
router.get('/button', function(req, res){
  res.render('button', {title: 'Button'});
});

module.exports = router;
