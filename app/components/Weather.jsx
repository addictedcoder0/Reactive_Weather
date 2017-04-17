var React = require('react');
var WeatherMessage = require('WeatherMessage');
var WeatherForm = require('WeatherForm');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState : function(){
    return {
        cityname : 'NYK',
        temperature: '27'
      };
  },

  handleNewCity : function(city){
    var that = this;
    openWeatherMap.getTemp(city).then(function(temp){
      that.setState({
        cityname : city,
        temperature : temp
      });
    },function(errorMessage){alert(errorMessage);});

    // keyword used to set the breakpoints  : awesome point
  //  debugger;
    this.setState({
      cityname : city
    });
  },

  render: function(){
    var {cityname , temperature} = this.state;
    return(
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onNewCity={this.handleNewCity} />
        <WeatherMessage cityname={cityname} temperature={temperature} />
      </div>
    );
  }
});

module.exports = Weather;
