const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Route = require("./config/routes");

const Routes = Object.values(Route);
const getFileNameAfterProcessing = (filePath) =>
  filePath.split("/").pop().replace(/\.hbs/, "");

module.exports = {
  entry: ["./src/js/index.js", "./src/styles/index.scss"],
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, ".dist"),
  },
  module: {
    rules: [
      {
        test: /\.hbs$/,
        loader: require.resolve("handlebars-loader"),
        options: {
          helperDirs: path.join(__dirname, "./handlebars-helpers"),
          inlineRequires: "/images/|/favicons/",
        },
      },
      {
        exclude: /node_modules|favicons/,
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: require.resolve("file-loader"),
        options: {
          name: "[name].[ext]",
          publicPath: "./images/",
          outputPath: "images/",
        },
      },
    ],
  },
  plugins: [
    ...Routes.map(
      ({ title, file, url, description }) =>
        new HtmlWebpackPlugin({
          template: file,
          title,
          url,
          description,
          filename: getFileNameAfterProcessing(file),
        })
    ),
  ],
  devServer: {
    compress: true,
    port: 1213,
    open: true,
  },
};
