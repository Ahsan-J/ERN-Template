require('babel-register')({
    presets:['react']
});

const server = require('./modules/app.js');
var port = 5000;

server.listen(port,function(){
    console.log(`Server Running at http://localhost:${port}`);
});