var express = require( 'express' );
var app = express();

//Volleyball Library
const volleyball = require('volleyball');
app.use(volleyball);

const logger = volleyball.custom({ debug: true });
app.use(logger);

app.get('/', function (req, res) {
  res.send('HERE!!!!!!!');
  //logger();
});

app.get('/is-anybody-in-there', function (req, res) {
  res.send('this is a response to GET\n');
});

app.post('/post', function (request, response) {
 response.send('this is a response to POST\n')
 logger();
});

app.put('/update', function(req, res, next){
    res.send('this is a response to UPDATE\n');
});

app.delete('/delete', function(req, res, next){
    res.send('this is a response to DELETE\n');
});

app.use('/chaining-url', function (req, res, next) {
  //res.send('this is a response to GET\n');
  console.log("first");
  res.value = 3;
  next();
});
app.use('/chaining-url', function (req, res, next) {
    //logger();
  res.send('chaining url\n' + res.value);

});
app.listen(3000, function(){
    console.log('server is listening on port 3000');

});