const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');

module.exports = {
  entry : {main: ['./app/main.js', './app/styles/main.scss']},
  output: {
  	path: './build',
    filename: '/js/[name].js'
  },
  watch: true,
  module: {
    rules: [
	    {
	    	test   : /\.js$/,
	        exclude: /node_modules/,
	        loader : 'babel-loader',
	        query  : {
	          presets: [ 'es2015' ]
	        }
	    },
	    {
	    	test   : /\.js$/,
	    	exclude: /node_modules/,
	    	loader : 'jshint-loader',
	    	options: {
	    		esversion: 6
	    	}
	    },
	    {
	        test: /\.scss$/,
	        loader: ExtractTextPlugin.extract({
	          fallback: "style-loader",
	          loader: "css-loader!sass-loader"
	        })
	      },
	    {
	        test: /\.css$/,
	        loader: "style-loader!css-loader"
	    },
	    {
		  test: /\.(html)$/,
		  use: {
		    loader: 'html-loader',
		    options: {
		      attrs: [':data-src']
		    }
		  }
		}
    ]
  },
  plugins: [
		new ExtractTextPlugin(
		{
			filename: "/css/[name].css", 
		    allChunks: true
		})
  ]
};