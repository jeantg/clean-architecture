const { merge } = require("webpack-merge");
const path = require("path");
const common = require("./webpack.common.config.js");
module.exports = merge(common, {
  devtool: "inline-source-map",
  devServer: {
    port: 3000,
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, "public"),
    },
  },
  mode: "development",
});
