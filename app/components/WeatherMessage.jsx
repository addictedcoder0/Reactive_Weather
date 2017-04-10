var React = require('react');

var WeatherMessage = React.createClass({
  render : function(){
    var cityname =  this.props.cityname;
    var temperature =  this.props.temperature;


    return(
      <div>
        <h3 className="text-center">cityname  {cityname} has temperature {temperature}</h3>
      </div>
    );
  }
});

module.exports = WeatherMessage;
