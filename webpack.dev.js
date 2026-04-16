const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",

  devtool: "eval-source-map",

  entry: "./src/index.js",

  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    devtoolModuleFilenameTemplate: (info) =>
      `webpack:///./${info.resourcePath.replace(/\\/g, "/")}`,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],

  devServer: {
    mode: "development",

    devServer: {
      static: "./dist", // folder to serve
      open: true, // auto opens browser
      hot: true, // enables hot reload
      liveReload: true, // fallback reload
      port: 3000, // optional
    },

    client: {
      overlay: false,
    },
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },
};
