var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/login', function(req, res, next) {
  // 네이버 로그인 구현하기
  res.send('respond with a resource');
});

module.exports = router;
