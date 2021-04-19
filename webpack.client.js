const path = require('path');
const merge = require('webpack-merge');
const base = require('./webpack.base')

const client = {
  
  // Tell webpack the root file of our server application
  entry: './src/client/client.js',
  // Tell webpack where to put the output file that is generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  // Tell webpack to run babel on every file it runs through
}

module.exports = merge(base, client);