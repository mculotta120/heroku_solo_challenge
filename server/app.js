var express = require('express');
var app = express();
var server = app.listen(process.env.PORT || 3000, function(){
  console.log('server listening');
});

app.get('/', function(req,res){
  res.writeHead(200);
  res.write('hello world');
  res.end();
});
