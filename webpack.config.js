const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: [
    "./src/ui/index.tsx",
  ],
  resolve: {
    extensions: ["*", ".ts", ".tsx", ".js"],
    alias: {
      "@generator": path.resolve(__dirname, "src/generator"),
      "@solver": path.resolve(__dirname, "src/solver"),
      "@util": path.resolve(__dirname, "src/util"),
      "@grid": path.resolve(__dirname, "src/grid"),
      "@server": path.resolve(__dirname, "src/server"),
      "@ui": path.resolve(__dirname, "src/data-ui"),
    },
  },

  module: {
    rules: [{
      test: /src\/.*\.tsx?$/,
      exclude: /node_modules/,
      loader: "ts-loader",
      options: {
        configFile: "tsconfig-webpack.json",
      },
    }, {
      test: /src\/ui\/.*\.css$/,
      exclude: /node_modules/,
      use: [
        MiniCssExtractPlugin.loader,
        "css-loader", "postcss-loader",
      ],
    }],
  },

  watch: true,

  plugins: [
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false,
    }),
    new MiniCssExtractPlugin({
      filename: "styles.css",
      chunkFilename: "styles.css"
    }),
    new HtmlWebpackPlugin({
      title: "Sudoku",
    }),
  ],

  optimization: {
    minimize: false,
    splitChunks: {
      chunks: "all",
    },
  },

  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "public"),
    publicPath: "/",
  },
};
