var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Personalization' });
});

router.param('id', function(req, res, next, id){
  console.log(id);
  next();
})

router.route('/vals/:id')
  .get(function(req, res, next){

})
  .post(function(req, res, next){
    console.log(req.body.test);
    res.send('success');
});


//Always last
module.exports = router;
