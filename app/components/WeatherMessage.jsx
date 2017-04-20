var React = require('react');

var WeatherMessage = React.createClass({
  render : function(){
    var cityname =  this.props.cityname;
    var temperature =  this.props.temperature;
    return(
      <div>
        <h3 className="text-center">city : {cityname} has current temperature {temperature} (Celcius)</h3>
      </div>
    );
  }
});

module.exports = WeatherMessage;
