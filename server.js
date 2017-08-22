const express = require('express');
// const bodyParser = require('body-parser');
const app = express();
const port = 5000;

//uses

// app.use(bodyParser.urlencoded({extended:true}));
// app.use(bodyParser.json());
 
//setters

app.set('views','./views' );
app.set('view engine','jsx');
app.engine('jsx',require('express-react-views').createEngine());

//routings 

app.get('/',function (req,resp){
    resp.render('index',{heading:'Hello World!!!',title:'Ahsan | React Template'});
});

//server setting

app.listen(port,function(){
    console.log(`Listening at ${port}`);
});