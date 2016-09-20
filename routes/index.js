var express = require('express');
var router = express.Router();
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');

var path = require('path');
var tweets = tweetBank.list();

router.get('/', function (req, res) {
  console.log('tweets: ' + tweets);
  res.render( 'index', { tweets: tweets } );
});


router.use(express.static('public')); // shows any files by url that are in the public folder




router.get( '/users/:name', function(req, res, next) {
	var userName = req.params.name;
	var tweets = tweetBank.list();
	console.log('tweets: ' + tweets);
	var userTweets = tweetBank.find(['name', userName]);
	console.log('userTweets.name: ' + userTweets['name']);
	res.render('profile', {userTweets: userTweets});
});








module.exports = router;





