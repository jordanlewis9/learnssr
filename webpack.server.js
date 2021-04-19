const path = require('path');
const merge = require('webpack-merge');
const base = require('./webpack.base');
const webpackNodeExternals = require('webpack-node-externals');

const server = {
  // Inform webpack that we're building a bundle for 
  // NodeJS, rather than for the browser
  target: 'node',
  // Tell webpack the root file of our server application
  entry: './src/index.js',
  // Tell webpack where to put the output file that is generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  // Tell webpack to run babel on every file it runs through
  externals: [webpackNodeExternals()]
}

module.exports = merge(base, server);