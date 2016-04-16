var fs = require('fs');
var path = require('path');
var webpack = require('webpack');

module.exports = {

  devtool: 'source-map',

  entry: [
    './app/components/App.js'
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.css$/,
        loaders: ['style-loader','css-loader']
      },
    ]
  },

  // plugins: [
  //   new webpack.optimize.OccurenceOrderPlugin(),
  //   new webpack.optimize.DedupePlugin(),
  //   new webpack.optimize.UglifyJsPlugin({
  //     compressor: { warnings: false },
  //   }),
  //   new webpack.DefinePlugin({
  //     'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
  //   })
  // ]
}
