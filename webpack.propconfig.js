var path = require("path");
var webpack = require('webpack');

var config = {
  resolve: {
    extensions: ['', '.jsx', '.js'],
    modulesDirectories: ['node_modules', 'bower_components']
  },
  entry: [
    path.resolve(__dirname, 'src/js/entry.js')
  ],
  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: 'bundle.js',
    publicPath: '/assets/'
  },
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015,presets[]=stage-1']
    }, {
      test: /\.(jpg|png)$/,
      loader: "url?limit=8192"
    }, {
      test: /\.(css|scss)$/,
      loaders: ['style', 'css?modules&localIdentName=[name]-[local]-[hash:base64:5]',
        'postcss?{browsers:["> 5%", "ie 9"]}', 'sass?outputStyle=compressed'
      ]
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
      }
    })
  ]
};

module.exports = config;
