var axios  = require('axios');
const weather_url = "http://api.apixu.com/v1/current.json?key=f5ec2fba22a64dca88a51250171704&q=";

/*
service provider : apixu
secret key : f5ec2fba22a64dca88a51250171704
API is CORS Enabled
*/
module.exports = {
  getTemp : function(location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${weather_url}`+location;

    return axios.get(requestUrl).then( function (res){
      if(res.data.cod && res.data.message){
        throw new Error(res.data.message);
      }else{
        debugger
        return res.data.current.temp_c;
      }
    }, function (res){
      throw new Error(res.data.message);
    });
  }
}
