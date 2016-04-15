var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    app: './js/index.js',
    vendor: ['react', 'react-dom', 'react-router']
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'app.js'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(build|node_modules)/,
        loader: 'babel'
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      minChunks: 3,
      name: "vendor",
      filename : "vendor.bundle.js"
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings : false,
      }
    })
  ]
};