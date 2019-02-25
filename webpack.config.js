const path = require('path');
const autoprefixer = require('autoprefixer')

module.exports = {
  devtool: "inline-source-map",
  mode: 'development',
  entry: './src/entry/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true,
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              indent: 'postcss',
              plugins: [
                autoprefixer({browsers: '> 5%'}),
              ],
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: "bundle.js",
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, "public/dist"),
  },
};
