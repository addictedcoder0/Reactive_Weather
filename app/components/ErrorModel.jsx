var React = require('react');

var ErrorModel = React.createClass({
  componentDidMount : function(){
    var model = new Foundation.Reveal($('error-model'));
    model.open();
  },
  render: function(){
    return(
      <div id="error-model" className="reveal tiny text-center" data-reveal="">
      <p> Our Error Message</p>
      <p>
      <button className="button hollow" data-close="">
          OKAY
      </button>
      </p>
      </div>
    );
  }
});

module.exports = ErrorModel;
