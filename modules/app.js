var express = require('express');
var app = express();

app.use(express.static('public'));
app.use(require('.//../myrouter/index.jsx'));

module.exports = app;
