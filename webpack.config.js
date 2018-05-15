let path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

let conf = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.js',
	},
	module: {
		rules:[
			{
				test: /\.js$/,
				loader: 'babel-loader'
			},
			{
		        test: /\.css$/,
		        use: ExtractTextPlugin.extract({
		          fallback: "style-loader",
		          use: "css-loader"
		        })
	        },
			{
		        test: /\.scss$/,
		        use: ExtractTextPlugin.extract({
		          fallback: "style-loader",
		          use: ["css-loader", "sass-loader"]
		        })
	        }	        
		]
	},
  	plugins: [
    	new HtmlWebpackPlugin({
      		filename: "./index.html",
      		template: "./index.html"
    	}),
    	new ExtractTextPlugin("styles.css")
  	],
  	devServer: {
  		contentBase: path.join(__dirname, "dist"),
 		compress: true,
  		port: 9000
	}
};

module.exports = conf;