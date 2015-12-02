var express = require('express');

var app = express();

app.get('/', function (req, res){
  console.log('1');
  res.send('Hello World!');
});

app.listen(3000, function (){
  console.log('2');
  console.log('Server On!');
});
