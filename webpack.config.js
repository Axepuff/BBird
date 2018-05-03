const path = require('path');

module.exports = {
  entry: './src/app/app',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'di st/'
  },
  devServer: {
    overlay: true
  },
	devtool: 'eval-sourcemap',
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

