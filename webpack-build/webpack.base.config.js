const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const outputPath = path.resolve(__dirname, '../dist')

module.exports = {
	entry: {
		app: [
			'react-hot-loader/patch',
			path.resolve(__dirname, '../src/index.js')
		]
	},
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: '[name].js',
	
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				enforce: 'pre',
				exclude: /node_modules/,
				use: 'eslint-loader'
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			},
			
			
		]
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, '../src/assets/index.html'),
			filename: 'index.html',
			path: outputPath
		}),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],
	
}


