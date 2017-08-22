var React = require('react');
var createReactClass = require('create-react-class');
var DefaultTemplate = require('./DefaultTemplate');

var ReactDOM = createReactClass({
    render : function() {
        return(//main component
            <DefaultTemplate title={this.props.title}>
                <h1>{this.props.heading}</h1>
            </DefaultTemplate>
        );
    }
});

module.exports = ReactDOM;