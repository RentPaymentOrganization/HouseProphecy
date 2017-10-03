const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const outputPath = path.resolve(__dirname, '../dist')

module.exports = {
	module: {
		rules: [		
			{
				test: /\.(scss|css)$/,
				exclude: /node_modules/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			},	
			{
				test: /\.(gif|png|jpg|jpeg|svg)$/,
				exclude: /node_modules/,
				include: path.resolve(__dirname, '../src/assets/img/'),
				use: 'url-loader?limit=10000&name=assets/img/[name].[ext]',
				
			}		
		]
	},

    devServer: {
		contentBase: path.resolve(__dirname, '../dist'),
		port: 8081,
		historyApiFallback: true,
		inline: true,
		hot: true,
		//host: '0.0.0.0'
	}
    
}