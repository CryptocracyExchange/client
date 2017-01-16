var path = require('path');
var webpack = require('webpack');

const config = {
  entry: [
   './components/index.jsx'
  ],
  output: {
    path: path.resolve(__dirname, 'client'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loaders: ['babel-loader?{"presets":["es2015","react"]}'],
        exclude: /node_modules/
      }
    ]
  },
  resolveLoader: {
    root: [
      path.join(__dirname, 'node_modules'),
    ],
  },
  resolve: {
    root: [
      path.join(__dirname, 'node_modules'),
    ],
  },
  devtool: '#inline-source-map'
};

if (process.env.NODE_ENV === 'prod') {
  config.plugins = [
    new webpack.DefinePlugin({  // <-- Key to reducing React's size
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.DedupePlugin(),            // Dedupe similar code 
    new webpack.optimize.UglifyJsPlugin(),          // Minify everything
    new webpack.optimize.AggressiveMergingPlugin()  // Merge chunks
  ]
}

if (process.env.NODE_ENV !== 'prod') {
  config.entry.unshift(
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    'webpack/hot/only-dev-server'
    );
  config.module.loaders[0].loaders.unshift('react-hot');
  config.plugins =[
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin({quiet: true}),
    new webpack.NoErrorsPlugin()
  ];
}

module.exports = config;
