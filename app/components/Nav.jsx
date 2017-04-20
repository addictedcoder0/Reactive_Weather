var React =  require('react');
var {Link,IndexLink} = require('react-router');

var Nav = React.createClass({
onSearch : function(e){
  e.preventDefault();
  var city = this.refs.city.value;
  if(city && city.length>0){
    this.refs.city.value = '';
    var encodedCity =  encodeURIComponent(city);
    console.log(encodedCity);
    window.location.hash = '#/?city='+encodedCity;
  }
},

render : function(){
  return(
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">React Weather App</li>
          <li>
            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight : 'bold'}}>Get Weather</IndexLink>
          </li>
          <li>
            <Link to="/about" activeClassName="active" activeStyle={{fontWeight : 'bold'}}>About</Link>
          </li>
          <li>
            <Link to="/examples" activeClassName="active" activeStyle={{fontWeight : 'bold'}}>Examples</Link>
          </li>
        </ul>
      </div>
      <div className="top-bar-right">
        <form onSubmit={this.onSearch}>
          <ul className="menu">
            <li>
              <input type="search" ref="city" placeholder="Search Weather" />
            </li>
            <li>
              <input type="submit" className="button" value="Get Weather" />
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
}
});

module.exports = Nav;

// this is the copy of original content of render
// var old = (
//   <div>
//     <h1>Nav Bar</h1>
//     <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight : 'bold'}}>Get Weather</IndexLink>
//     <Link to="/about" activeClassName="active" activeStyle={{fontWeight : 'bold'}}>About</Link>
//     <Link to="/examples" activeClassName="active" activeStyle={{fontWeight : 'bold'}}>Examples</Link>
//   </div>
// );
