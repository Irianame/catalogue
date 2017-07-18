const ExtractTextPlugin = require("extract-text-webpack-plugin");

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
    ],
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader!sass-loader"
        })
      }
    ]
  },
  plugins: [
		new ExtractTextPlugin("./styles/styles.css"),
	]
};