var React = require('react');
var WeatherMessage = require('WeatherMessage');
var WeatherForm = require('WeatherForm');
var openWeatherMap = require('openWeatherMap');
var ErrorModel = require('ErrorModel');

var Weather = React.createClass({
  getInitialState : function(){
    return {
        //cityname : 'NYK',
      //  temperature: '27',
        isLoading:false
      };
  },

  handleNewCity : function(city){
    var that = this;
    this.setState({
      isLoading : true,
      error_Message : undefined
    });

    openWeatherMap.getTemp(city).then(function(temp){
      that.setState({
        cityname : city,
        temperature : temp,
        isLoading:false
      });
    },function(e){
      that.setState({
        isLoading:false,
        error_Message:e.message
      });
  });
},

  render: function(){
    var {cityname , temperature ,isLoading ,error_Message} = this.state;

    function renderMessage(){
      if(isLoading){
        return <h3 className="text-center ">Fetching Weather Info ...</h3>;
      }else if(temperature && cityname){
        return <WeatherMessage cityname={cityname} temperature={temperature} />;
      }

    }

    function renderError(){
      if(typeof error_Message === 'string'){
        return <ErrorModel />;
      }
    }

    return(
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onNewCity={this.handleNewCity} />
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
});

module.exports = Weather;
