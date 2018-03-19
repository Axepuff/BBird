const path = require('path');

module.exports = {
  entry: './src/app/app',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};