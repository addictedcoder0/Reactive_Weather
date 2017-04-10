var React = require('react');
var WeatherMessage = require('WeatherMessage');
var WeatherForm = require('WeatherForm');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState : function(){
    return {
        cityname : 'NYK',
        temperature: '27 0c'
      };
  },

  handleNewCity : function(city){

    // currently due to CORS restriction we are unable to consume the response , chrome : Version 56.0.2924.87 (64-bit)
    // Basically all it requires a server which can serve CORS Based API .
    // closing API calls , once server supports CORS , i will be running it.
    // openWeatherMap.getTemp(city).then(function(temp){
    //   that.setState({
    //     cityname : city,
    //     temperature : temp
    //   });
    // },function(errorMessage){alert(errorMessage);});

    // keyword used to set the breakpoints  : awesome point
  //  debugger;
    this.setState({
      cityname : city
    });
  },

  render: function(){

    var cityname = this.state.cityname;
    var temperature = this.state.temperature;

    return(
      <div>
        <h1 className="text-center">Weather App</h1>
        <WeatherForm onNewCity={this.handleNewCity} />
        <WeatherMessage cityname={cityname} temperature={temperature} />
      </div>
    );
  }
});

module.exports = Weather;
