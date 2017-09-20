const express = require('express');

var app=express();

app.use(express.static('../dist'))

app.get('/',function(req,res){
  req.url='/index.html';
  res.end()
})
app.get('/*',function(req,res){
  res.redirect('/')
})

var server=app.listen(3333,function(){
  console.log('server start');
})
