var axios =  require('axios');

const darksky_WEATHER_API = 'https://api.darksky.net/forecast/572a8fc5cd6d3fe8ce9e229f8db4a540/13.082680,80.270718';

/*
darksky.net
secret key : 572a8fc5cd6d3fe8ce9e229f8db4a540
13.082680,80.270718

https://api.darksky.net/forecast/572a8fc5cd6d3fe8ce9e229f8db4a540/13.082680,80.270718

Browser CORS ISSUE
*/
module.exports = {
  getTemp : function(location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${darksky_WEATHER_API}`;

    return axios.get(requestUrl).then( function (res){
      if(res.data.cod && res.data.message){
        throw new Error(res.data.message);
      }else{
        return res.data.currently.temperature;
      }
    }, function (res){
      throw new Error(res.data.message);
    });

  }
}
