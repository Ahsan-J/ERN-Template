const React = require('react');
const ReactRouter = require('react-router-dom');
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;

var props = {title:"Ahsan|ReactRouting"}
var MainPage = require('.//../views/index.jsx');
var About = require('.//../views/About.jsx');

module.exports=(
<Switch>
          <Route exact path = "/" render = {()=>{return (<MainPage {...props}/>)}}></Route>
          <Route path = "/about" component = {()=>{return (<About {...props}/>)}} ></Route>
</Switch>
)