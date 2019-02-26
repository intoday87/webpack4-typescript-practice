const path = require('path');
const autoprefixer = require('autoprefixer')

const config = {
  devtool: "inline-source-map",
  mode: 'development',
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
};

module.exports = [{
  ...config,
  entry: {
    main: './src/entry/index.tsx',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public/dist'),
    chunkFilename: '[name].bundle.js',
  },
}, {
  ...config,
  entry: {
    another: './src/entry/another.ts',
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    library: 'Bundle',
    path: path.resolve(__dirname, 'public/dist'),
    publicPath: "dist/"
  },
}]
