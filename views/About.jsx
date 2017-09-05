var React = require('react');
var Template = require('./html.jsx');

class About_Page extends React.Component{
    constructor(props){
        super(props);
        this.state = {status:"false"}
    }
    componentDidMount(){
        this.setState({status:"true"})
    }
    render(){
        return (
        <Template title={this.props.title}>
            <h1>About</h1>
            <p>Is React Running ?? : {this.state.status}</p>
            <a href="/">Go Back</a>
        </Template>);
    }
}
module.exports = About_Page;