var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var year_ = 2022;
  var sinhviens = ['Alex','Tom','Jonny']
  res.render('index', { title: 'Express ab' ,
    nam : year_,
    students : sinhviens
  });
});
router.get('/news',function (req,res){
  res.render('news');
});

module.exports = router;
