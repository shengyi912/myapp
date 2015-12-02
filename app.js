
var express = require('express');

var app = express();

app.get('/', function (req, res){
  console.log('1');
  res.send('Hello World!');
});

app.listen(3000, function(){
  //서버 부팅시 한번만 실행 됨.
  console.log('2');
  console.log('Server On!');
});
