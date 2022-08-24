const HtmlWebpackPlugin = require('html-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, './src/index.jsx'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js',
    publicPath: '/',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(jsx?)$/,
        use: ['babel-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(jpe?g|jpg|png|gif|woff|woff2|eot|ttf|pdf|svg|otf|mp4)(\?[a-z0-9=.]+)?$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 8192
          }
        }
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    static: 'dist',
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: './src/images/icon.png',
      templateContent:
    `<html>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="theme-color">
      <title>Andrea Amaya</title>
      <body>
        <div id="root"></div>
      </body>
    </html> `,
    }),
    new ESLintPlugin({
      extensions: 'jsx',
    }),
  ],
}
