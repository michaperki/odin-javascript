const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: {
    app: "./src/index.js",
    // runtime code for hot module replacement
    hot: "webpack/hot/dev-server.js",
    // dev server client for web socket connection, hot module replacement
    client: "webpack-dev-server/client/index.js?hot=true&live-reload=true",
  },
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
    // Dev server client for web socket connection, hot and live reload logic
    hot: false,
    client: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Development",
    }),
    // plugin for hot module replacement
    new webpack.HotModuleReplacementPlugin(),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true, // webpack 5
    publicPath: "/",
  },
  // config for css loader
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  optimization: {
    runtimeChunk: "single",
  },
};
