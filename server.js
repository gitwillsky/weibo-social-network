var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new webpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  noInfo: true,
  quiet: true,
  historyApiFallback: true
}).listen(8080, '127.0.0.1', function(err, result){
  if (err) {
    console.log(err);
  }

  console.log('Listening at 127.0.0.1:8080');
});
