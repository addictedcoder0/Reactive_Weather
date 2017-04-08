var express = require('express');

//create our app
var app =  express();

// tell that which folder you want to server content from
app.use(express.static('public'));

//now just start the server
//it require 2 info  : (1) port number ,(2) function which get called once any req comes up
app.listen(3000,function(){
  console.log('express server is listening on Port : 3000');
});
