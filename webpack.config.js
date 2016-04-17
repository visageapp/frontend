var fs = require('fs');
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');

module.exports = {

  devtool: 'source-map',

  entry: [
    './app/routes/index.js'
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
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]!postcss-loader')
      }
    ]
  },
  plugins: [
      new ExtractTextPlugin('bundle.css')
  ]
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
