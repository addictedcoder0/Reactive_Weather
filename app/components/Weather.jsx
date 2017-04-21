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
      error_Message : undefined,
      cityname:undefined,    // these are added so that in case of error the previous data don't show up
      temperature:undefined
    });

    openWeatherMap.getTemp(city).then(function(temp){
      that.setState({
        cityname : city,
        temperature : temp,
        isLoading:false
      });
    },function(e){
      console.log(e);
      that.setState({
        isLoading:false,
        error_Message:e.message
      });
  });
},
// this is helping in example page search
componentDidMount : function(){
  var city = this.props.location.query.city;
  if(city && city.length>0){
    this.handleNewCity(city);
    // in order to remove the city name from url , after search
    window.location.hash = '#/';
  }
},
// this is helping in Nav-search based search
componentWillReceiveProps : function(newProps){
  var city = newProps.location.query.city;
  if(city && city.length>0){
    this.handleNewCity(city);
    // in order to remove the city name from url , after search
    window.location.hash = '#/';
  }
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
    console.log(error_Message);
    function renderError(){
      if(typeof error_Message === 'string'){
        return (<ErrorModel message={error_Message}/>);
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
