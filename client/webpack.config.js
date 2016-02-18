var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      './src/index.jsx'
    ]
  },
  output: {
    path: './dist',
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loader: 'style!' + 'css?sourceMap'
    }, {
      test: /\.scss$/,
      loader: 'style!' + 'css?sourceMap' + '!sass?sourceMap'
    }, {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'react-hot!babel'
    }, {
      test: /\.(json)$/,
      exclude: /node_modules/,
      loader: 'json-loader'
    }, {
      test: /\.(svg|ttf|woff|woff2|eot)(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url-loader'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Awesome ServeMe Project',
      template: './src/assets/index.ejs',
      appMountId: 'app',
      inject: false
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devtool: 'source-map'
};
