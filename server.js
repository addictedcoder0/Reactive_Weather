var express = require('express');

//create our app
var app =  express();
// Heroku will give a dynamic port to bind
const PORT = process.env.PORT || 3000 ;

//https is being redirected b/c openweather map api is not working with https , any way we are trying to find another solution
// on localhost setup this app will break b/c locally header 'x-forwarded-proto' doesn't exist , so change the condition of if block
// app.use(function(req,res,next){
//   if(req.headers['x-forwarded-proto'] === 'https'){
//     res.redirect('http://'+ req.hostname + req.url);
//   }else{
//     next(); // now it work for even localhost setup too ;)
//   }
// });




// tell that which folder you want to server content from
app.use(express.static('public'));

//now just start the server
//it require 2 info  : (1) port number ,(2) function which get called once any req comes up
app.listen(PORT,function(){
  console.log('express server is listening on Port : '+PORT);
});
