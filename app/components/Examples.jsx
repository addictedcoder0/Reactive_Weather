var React = require('react');
var {Link} = require('react-router');

var Examples = React.createClass({
  render: function(){
    return(
      <div >
      <h1 className="text-center page-title">Examples</h1>
      <p>Here are a few examples locations to try out :</p>
      <ol>
        <li>
          <Link to='/?location=Chennai'>Chennai</Link>
        </li>
        <li>
          <Link to='/?location=Delhi'>Delhi</Link>
        </li>
      </ol>
      </div>
    );
  }
});

module.exports = Examples;
