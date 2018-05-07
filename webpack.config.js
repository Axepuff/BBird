const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

let conf = {
  entry: ['babel-polyfill', './src/app/app'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'dist/'
  },
  devServer: {
    overlay: true
  },
  plugins: [
    new ExtractTextPlugin('style.css')
  ],
  module: {
    rules: [
        {
          test: /\.pug$/,
          use: {
            loader: 'pug-loader', options: {} 
          } 
        },
        {
          test: /\.js$/,
          use: {
            loader: 'babel-loader'
          } 
        },
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              { loader: 'css-loader', options: { importLoaders: 1 } },
              'postcss-loader'
            ]
          })
        }
    ]
  }
};

module.exports = (env, options) => {
  let production = options.mode;
  conf.devtool = production === 'production' ? 'source-map' : 'eval-sourcemap';
  return conf;
}