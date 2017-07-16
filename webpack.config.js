module.exports = {
  entry : './main.js',
  output: {
    filename: 'build.js'
  },
  watch: true,
  module: {
    loaders: [
      {
        test   : /\.js$/,
        exclude: /node_modules/,
        loader : 'babel-loader',
        query  : {
          presets: [ 'es2015' ]
        }
      }
    ]
  }
};