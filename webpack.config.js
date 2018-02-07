const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: './src',
  output: {
    path: __dirname + '/dist',
    filename: 'scroll-man.js',
    library: 'ScrollMan',
    libraryTarget: 'umd',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ]
  },
  resolve: {
    modules: [
      path.resolve('./node_modules'),
    ],
    extensions: ['.js'],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
  ],
  devtool: 'inline-source-map',
}
