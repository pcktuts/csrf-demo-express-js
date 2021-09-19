var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "App1, CSRF Demo", csrfToken: req.csrfToken() })
});
router.post('/process', function (req, res) {
  res.send('csrf is valid, data is being processed')
})

module.exports = router;
