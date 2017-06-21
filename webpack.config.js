const path = require("path");

const DIST_DIR = path.resolve(__dirname, "public"),
      SRC_DIR = path.resolve(__dirname, "src");

const config = {
  entry: SRC_DIR + "/app/main.js",
  output: {
    path: DIST_DIR + "/app",
    filename: "bundle.js",
    publicPath: "/app/"
  },
  devServer: {
    inline: true,
    contentBase: './src/app',
    port: 8100
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel',
        include: SRC_DIR,
        query: {
          presets: ['react', 'es2015', 'stage-0']
        } }
    ]
  },
  devtool: "eval-source-map"
};

module.exports = config;