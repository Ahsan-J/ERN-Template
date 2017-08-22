var React = require('react');
var createReactClass = require('create-react-class');

var HyperTextTemplate = createReactClass({
    render : function(){
        return (<html lang="en">
                <head>
                    <meta charset="UTF-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
                    <title>{this.props.title}</title>
                </head>
                <body>
                    {this.props.children}
                </body>
            </html>);
    }
});
module.exports = HyperTextTemplate;