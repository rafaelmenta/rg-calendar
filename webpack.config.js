var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry : './src/component/app.js',
  output : {
    filename : 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.styl$/,
      loader: 'style-loader!css-loader!stylus-loader'
    }]
  }
}