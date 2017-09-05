var expressRouter = require('express').Router();
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var StaticRouter = require('react-router').StaticRouter;

expressRouter.get('*',function(req,res){
    // var props = {title:'Ahsan | React Template'};
    const context = {}
    
      const html = ReactDOMServer.renderToString(
        <StaticRouter location={req.url} context={context} >
          {require('./router.jsx')}
        </StaticRouter>
      )
      if (context.url) {
        res.writeHead(302, {
          Location: context.url
        })
        res.end()
      } else {
        res.write(html)
        res.end()
      }
});

module.exports = expressRouter;