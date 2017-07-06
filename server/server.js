var express = require('express');
var path = require('path');
var config = require ('../webpack.config.js');
var webpack = require('webpack');
var bodyparser = require('body-parser')
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');

var app = express();

var compiler = webpack(config);
require('./routes/index.js')(app);
app.use(webpackDevMiddleware(compiler,{Noinfo:true, publicPath:config.output.publicPath}));
app.use(webpackHotMiddleware(compiler));
app.use(bodyparser.json());       // to support JSON-encoded bodies
app.use(bodyparser.urlencoded());
app.use(express.static('./dist'));
app.use('/', function (req, res) {
    res.sendFile(path.resolve('client/index.html'));
});


var port = process.env.PORT || 3000;

app.listen(port, function(error) {
  if (error) throw error;
  console.log("Express server listening on port", port);
});
