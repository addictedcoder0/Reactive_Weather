var React = require('react');
var WeatherMessage = require('WeatherMessage');
var WeatherForm = require('WeatherForm');

var Weather = React.createClass({
  getInitialState : function(){
    return {
        cityname : 'NYK',
        temperature: '27 0c'
      };
  },

  handleNewCity : function(city){
    this.setState({
      cityname : city
    });
  },

  render: function(){

    var cityname = this.state.cityname;
    var temperature = this.state.temperature;

    return(
      <div>
      <WeatherForm onNewCity={this.handleNewCity} />
      <WeatherMessage cityname={cityname} temperature={temperature} />
      </div>
    );
  }
});

module.exports = Weather;
