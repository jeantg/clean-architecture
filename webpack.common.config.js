const path = require("path");
const htmlPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
module.exports = {
  entry: path.resolve(__dirname, "src/index.tsx"),
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
  },
  plugins: [
    new htmlPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
  ],

  module: {
    rules: [
      {
        test: /\.svg$/,
        loader: "@svgr/webpack",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,

        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              [
                "@babel/preset-react",
                {
                  runtime: "automatic",
                },
              ],
              "@babel/preset-typescript",
            ],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    fallback: {
      stream: false,
    },
    modules: [path.resolve(__dirname, "./src"), "node_modules"],
  },
};
