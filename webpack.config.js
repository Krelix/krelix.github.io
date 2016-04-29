var path = require('path');
var webpack = require('webpack');
var _ = require('lodash');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var GENERIC_PARAMS = {
  entry: {
    app: './js/index.js'
  },
  output: {
    filename: 'app.js'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(dev|build|node_modules)/,
        loader: 'babel'
      }
    ]
  }
};

var DEV_PARAMS = {
  output: {
    path: path.join(__dirname, 'dev'),
  },
  module: {
    loaders: [
      {
        test: /\.styl$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!stylus-loader!'),
        exclude: /node_modules/
      },
      {
        test: /\.(jpe?g|png|svg|gif)$/i,
        loader: 'file',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "DEV VERSION - Home Page",
      filename: 'index.html',
      cache: true,
      template: 'assets/dev_index.html',
      files: {
        css: ["main.css"]
      }
    })
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
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
  ]
}

var isProd = (function() {
  var items = process.argv.filter(function (item) {
    return /^--TARGET=[a-zA-Z]/.test(item);
  });
  if(items.length > 0)
    return items[0].split('=')[1].toLowerCase() === 'prod';
  return false;
})();

module.exports = (function(isProduction){
  var mergeMethod = function(objValue, srcValue){
    if (_.isArray(objValue)) {
      return objValue.concat(srcValue);
    }
  };

  return _.mergeWith(GENERIC_PARAMS, isProduction ? DIST_PARAMS : DEV_PARAMS, mergeMethod);
})(isProd);
