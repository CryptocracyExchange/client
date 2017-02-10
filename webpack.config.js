var path = require('path');
var webpack = require('webpack');
var CompressionPlugin = require('compression-webpack-plugin');

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
  }
};
console.log('In the webpack config this is actually printed');
if (process.env.NODE_ENV === 'production') {
  console.log('and this is printed b/c its production?')
  config.plugins = [
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      },
    }),
    new webpack.optimize.DedupePlugin(),            // Dedupe similar code 
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false
      },
      compress: {
        screw_ie8: true,
        warnings: false
      }
    }),          // Minify everything
    new webpack.optimize.AggressiveMergingPlugin()  // Merge chunks
  ]
}

if (process.env.NODE_ENV !== 'production') {
  console.log('and this is printed because its not production?')
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
