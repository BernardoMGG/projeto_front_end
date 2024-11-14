const webpack = require("webpack");
const path = require("path");
const package = require("./package.json");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, "./src/index.js"),
  devtool: 'inline-source-map',
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./build"),
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,  // Processa arquivos JS e JSX
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/, // Regra para arquivos CSS
        use: ['style-loader', 'css-loader'], // Usando style-loader e css-loader para processar CSS
      },
      {
        test: /\.(scss|sass)$/, // Caso você use SCSS ou SASS no futuro
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },

  resolve: {
    extensions: [".js", ".jsx"],
  },

  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'public',
          to: './',
        },
      ],
    }),
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(process.env),
      "process.env.PUBLIC_URL": JSON.stringify(package.homepage),
    }),
  ],

  devServer: {
    open: true,
    historyApiFallback: true,
    static: {
      directory: path.resolve(__dirname, './public'),
    },
  },
};
