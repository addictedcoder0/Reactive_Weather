var express = require('express');

//create our app
var app =  express();
// Heroku will give a dynamic port to bind
const PORT = process.env.PORT || 3000 ;

//https issue
// app.use(function(req,res,next){
//   if(req.headers['x-forwarded-proto'] === 'http'){
//     // debugger;
//     next();
//   }else{
//     res.redirect('http://'+ req.hostname + req.url);
//   }
// });

// tell that which folder you want to server content from
app.use(express.static('public'));

//now just start the server
//it require 2 info  : (1) port number ,(2) function which get called once any req comes up
app.listen(PORT,function(){
  console.log('express server is listening on Port : '+PORT);
});
