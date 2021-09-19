var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/form', function (req, res) {
  // pass the csrfToken to the view
  res.render('users/form', { csrfToken: req.csrfToken() })
})

router.post('/process', function (req, res) {
  res.send('csrf is valid, data is being processed')
})

module.exports = router;
