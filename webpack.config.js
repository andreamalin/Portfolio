const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(jsx?)$/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|otf|svg|mp4)$/i,
        use: ['file-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    contentBase: 'dist',
  },
  plugins: [new HtmlWebpackPlugin({
    favicon: './src/images/icon.png',
    templateContent:
    `<html>
      <meta name="viewport">
      <meta name="theme-color">
      <title>Andrea Amaya</title>
      <body>
        <div id="root"></div>
      </body>
    </html> `,
  })],
}
