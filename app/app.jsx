var React = require('react');
var ReactDOM =  require('react-dom');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

var { Route,Router, IndexRoute, hashHistory} = require('react-router');
var Main =  require('Main');

//Load Foundation css , we are using style! (to inject css in style tag) ;
//css!(to inform require module that this is a css)
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About} />
      <Route path="examples" component={Examples} />
      <IndexRoute component={Weather}/>
    </Route>
  </Router>
  ,document.getElementById('app')
);
