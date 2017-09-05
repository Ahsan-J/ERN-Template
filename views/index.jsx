const React = require('react');
const Template = require('./html.jsx');

class First_Page extends React.Component{
    constructor(props){
        super(props);
        this.state = {status:"false"}
        }
    componentDidMount(){
        this.setState({status:"true"});
    }
    render(){
        return(<Template title={this.props.title} >
            <h1>Hello From React</h1>
            <p>Is React Running ?? : {this.state.status}</p>
            <a href="/about">About</a>
        </Template>);
    }
}

module.exports = First_Page;