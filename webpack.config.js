var path = require('path');

module.exports = {
  entry: './js/index.js',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'app.js'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(build|node_modules|bower_components)/,
        loader: 'babel'
      }
    ]
  }
}
;