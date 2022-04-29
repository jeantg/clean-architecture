process.env.NODE_ENV = "production";
const { merge } = require("webpack-merge");
const common = require("./webpack.common.config");
module.exports = merge(common, {
  devtool: "source-map",
  mode: "production",
});
