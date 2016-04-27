var path = require('path');
var webpack = require('webpack');
var _ = require('lodash');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var GENERIC_PARAMS = {
  entry: {
    app: './js/index.js',
  },
  output: {
    filename: 'app.js'
  }
};

var DEV_PARAMS = {
  output: {
    path: path.join(__dirname, 'dev'),
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(build|node_modules)/,
        loader: 'babel'
      },
      {
        test: /\.styl$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!stylus-loader'),
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "DEV VERSION - Home Page",
      filename: 'index.html',
      cache: true,
      template: 'assets/dev_index.html'
    }),
    new ExtractTextPlugin("main.css")
  ]
};

var DIST_PARAMS = {
  entry: {
    vendor: ['react', 'react-dom', 'react-router']
  },
  output : {
    path: path.join(__dirname, 'build'),
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      minChunks: 3,
      name: "vendor",
      filename: "vendor.bundle.js"
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      }
    })
  ]
}



module.exports = (function(isProduction){
  var merged =  _.merge(GENERIC_PARAMS, isProduction ? DIST_PARAMS : DEV_PARAMS);
  return merged;
})(false);