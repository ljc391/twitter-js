var express = require('express');
var router = express.Router();
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');

var path = require('path');

router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});


router.use(express.static('public'));

// Go ahead and build out a route to serve up this file. 
// When you're done, you should be able to hit 
// localhost:3000/stylesheets/style.css from your browser 
// and get the CSS file rendered in your browser.

// router.get('/stylesheets/style.css', function(req, res, next) {
// 	console.log('we are here!');
// 	res.sendFile(path.join(__dirname, '../public', 'stylesheets/style.css'));
// });








module.exports = router;





