const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: "./client/index.js",
  output: {
    path: path.join(__dirname, "client"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /.js?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          presets: ["env", "react"],
        },
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader",
      },
    ],
  },
};
