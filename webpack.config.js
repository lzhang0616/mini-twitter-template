const path = require('path');
const webpack = require('webpack');

/**
 * Production webpack settings.
 */
module.exports = {
  entry: [
    'babel-polyfill', 'es6-promise/auto', 'whatwg-fetch', `${__dirname}/src/index`
  ],
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: `${path.basename(__dirname)}-bundle.js`
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: __dirname,
        query: {
          babelrc: false,
          presets: [['es2015', { modules: false }], 'react', 'stage-1', 'stage-2'],
          plugins: ['transform-object-assign']
        }
      },
      {
        test: /\.s?css$/,
        loaders: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ]
};
