//express패키지 require
var express = require('express');
var path = require('path');
var app = express();
var data = {count : 0};

app.set("view engine", 'ejs');
// app.get('/', function (req, res){
//   console.log('1');
//   res.send('Hello World!');
// });

//app.use(express.static(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'public')));
console.log('__dirname='+__dirname);

app.listen(3000, function(){
  //서버 부팅시 실행 됨.
  console.log('2');
  console.log('Server On!');
});


var ic = require("./routes/ictest");
app.get('/', function(req, res){
  data.count++;
    console.log(data.count);
    ic.output(req, res, data);
});

app.get('/reset', function(req, res){
    data.count = 0;
    ic.output(req, res, data);
});

//http://localhost:3000/set/count?count=30
app.get('/set/count', function(req, res){
    console.log("req.query.count : "+req.query.count);
    if(req.query.count){
      data.count = req.query.count;
    }
    ic.output(req, res, data);
});

//http://localhost:3000/set/5
app.get('/set/:num', function(req, res){
    console.log("req.query.count : "+req.query.count);
    data.count = req.params.num;
    ic.output(req, res, data);
});
