var React = require('react');

var WeatherMessage = React.createClass({
  render : function(){
    var cityname =  this.props.cityname;
    var temperature =  this.props.temperature;
    return(
      <div>
        <h2>cityname  {cityname}</h2>
        <h3>temperature {temperature}</h3>
      </div>
    );
  }
});

module.exports = WeatherMessage;
