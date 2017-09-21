const express = require('express');

var app=express();

app.get('/',function(req,res,next){
  req.url='/index.html';
  next();
})
app.get('/my_content/*',function(req,res){
  res.redirect('/m/')
})

var server=app.listen(3333,function(){
  console.log('server start');
}) 

app.use(express.static('../dist'));
app.use(express.static('../dist/static'));
