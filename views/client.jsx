var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('.//../myrouter/router.jsx')
var BrowserRouter = require('react-router-dom').BrowserRouter;

ReactDOM.render(<BrowserRouter>{routes}</BrowserRouter>,document);
