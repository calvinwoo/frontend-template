/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = () => ({
  entry: './src',
  output: {
    publicPath: '/',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(gif|ico|jpg|png|svg|woff|woff2|ttf)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              publicPath: '/',
            },
          },
          {
            loader: 'image-webpack-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'App',
      meta: {
        viewport:
          'width=device-width, initial-scale=1, user-scalable=no, viewport-fit=cover',
      },
    }),
    new webpack.EnvironmentPlugin({}),
  ],

  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    compress: true,
    historyApiFallback: {
      disableDotRule: true,
    },
    port: 4000,
  },
});
