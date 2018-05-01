module.exports = {
  devtool: 'source-map',
  mode: 'development',
  entry: ['./src/index.js'],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: 'babel-loader',
      },
    ],
  },

  devServer: {
    historyApiFallback: true,
    contentBase: './',
  },
};
