var React = require('react');

var NavBar = React.createClass({
  render: function() {
    return (
      <div className="NavBar">
        <h3>{"NavBar"}</h3>
        <p>{"Heroku test..."}</p>
      </div>
    )
  }
});

module.exports = NavBar