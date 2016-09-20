var express = require( 'express' );
var app = express();

var routes = require('./routes');
app.use('/', routes);


var nunjucks = require('nunjucks');



//Volleyball Library
const volleyball = require('volleyball');
app.use(volleyball);





var locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};
nunjucks.configure('views', {noCache: true});
nunjucks.render('layout.html', locals, function (err, output) {
    console.log(output);
});

app.set('view engine', 'html');
app.engine('html', nunjucks.render);


// app.get('/', function (req, res) {
//   res.render('layout.html', locals);
//   //logger();
// });


// var data = {
//   title: 'An Example',
//   people: [
//     {name: 'Gandalf'},
//     {name: 'Frodo'},
//     {name: 'Hermione'}
//   ],
// };

// nunjucks.configure('/views');
// nunjucks.render('layout.html', data, function(err, output) {
//   console.log(output)
// });




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

