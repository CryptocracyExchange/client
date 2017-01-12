var path = require('path');

var webpack = require('webpack');

module.exports = {
  entry: [
   'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
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
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
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
  devtool: '#inline-source-map',
  plugins: [
    // Webpack HMR for faster dev time
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
    // new webpack.DefinePlugin({  // <-- Key to reducing React's size
    //   'process.env': {
    //     'NODE_ENV': JSON.stringify('production')
    //   }
    // }),
    // new webpack.optimize.DedupePlugin(),            // Dedupe similar code 
    // new webpack.optimize.UglifyJsPlugin(),          // Minify everything
    // new webpack.optimize.AggressiveMergingPlugin()  // Merge chunks 
  ]
};
