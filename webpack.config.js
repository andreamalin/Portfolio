const HtmlWebpackPlugin = require('html-webpack-plugin')
const SitemapPlugin = require('sitemap-webpack-plugin').default
const path = require('path')

const paths = [
  {
    path: '/',
    lastmod: '2021-06-08',
    priority: 1,
    changefreq: 'monthly',
  },
]

module.exports = {
  entry: path.resolve(__dirname, './src/index.jsx'),
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
  plugins: [
    new HtmlWebpackPlugin({
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
    }),
    new SitemapPlugin({
      base: 'http://andreaamaya.com/',
      paths,
      options: {
        filename: 'map.xml',
      },
    }),
  ],
}
