var path = require("path");
var webpack = require('webpack');

var config = {
    devtool: 'eval',
    resolve: {
        extensions: ['', '.jsx', '.js'],
        modulesDirectories: ['node_modules', 'bower_components']
    },
    entry: [
        'webpack-dev-server/client?http://127.0.0.1:8080', // WebpackDevServer host and port
        'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
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
        },{
            test: /\.(css|scss)$/,
            loaders: ['style', 'css?modules&localIdentName=[name]-[local]-[hash:base64:5]',
                'postcss?{browsers:["> 5%", "ie 9"]}', 'sass?outputStyle=compressed'
            ]
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
            }
        })
    ]
};

module.exports = config;
