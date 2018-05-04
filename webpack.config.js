const path = require('path');

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
          use: [
            'style-loader',
            {
              loader: 'css-loader', options: { importLoaders: 1 }
            },
            'postcss-loader'
          ]
        }
    ]
  }
};

module.exports = (env, options) => {
  let production = options.mode;
  conf.devtool = production === 'production' ? 'source-map' : 'eval-sourcemap';
  return conf;
}