var express = require('express');
var router = express.Router();
const username = 'santa'
const password = 'asdf'


router.get('/', function (req, res) {
  if(req.session.loggedIn){
    res.redirect('/index')
  }else{
    if(req.query.auth)
    {return res.render('login', {message:"Invalid username and password", auth:false})}
    res.render('login')
  }
});

router.post('/index', (req, res) => {
  if (username == req.body.usr && password == req.body.password) {
    req.session.loggedIn = true;
    req.session.user = req.body
    res.redirect('/index')
  } else {
    res.redirect('/?auth=false')
  }
})

module.exports = router;