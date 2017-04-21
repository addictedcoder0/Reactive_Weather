var React = require('react');
var ReactDOM =  require('react-dom');
var ReactDOMServer =  require('react-dom/server');

var ErrorModel = React.createClass({

  getDefaultProps : function(){
    return {
      title : 'Error'
    };
  },

  propTypes :{
    title : React.PropTypes.string,
    message : React.PropTypes.string.isRequired
  },

  componentDidMount : function(){
    var {title,message} = this.props;
    var modelMarkUp =  ( <div id="error-model" className="reveal tiny text-center" data-reveal="">
      <h4>{title}</h4>
      <p>{message}</p>
      <p>
      <button className="button hollow" data-close="">
          OKAY
      </button>
      </p>
      </div>
    );

    var $modal =  $(ReactDOMServer.renderToString(modelMarkUp));
    $(ReactDOM.findDOMNode(this)).html($modal);

    var model = new Foundation.Reveal($('#error-model'));
    // foundation on error , changes the DOM and react don't work in this way ...
    //so that's why once we search a invalid location we are not able to find the weather for valid one
    //Solution : remove the html content from the render() and put them here and inject them via jquery
    model.open();
  },
  render: function(){
    return(
    <div>

    </div>
    );
  }
});

module.exports = ErrorModel;
