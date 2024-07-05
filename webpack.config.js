const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const development = process.argv[2] === "--mode=development";
const devtool = development ? "cheap-module-source-map" : false;

module.exports = {
  entry: './src/assets/js/index.js',
  output: {
      path: __dirname,
      filename: './htdocs/assets/js/app.js',
  },
  devtool: devtool,
  module: {
    rules: [
      {
        test: /\.(scss|sass|css)$/i,
        use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './htdocs/assets/css/style.css',
    }),
  ],
  devtool: 'source-map',
  watchOptions: {
    ignored: /node_modules/
  }
};