const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const outputPath = path.resolve(__dirname, '../dist')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const staticSourcePath = path.join(__dirname, '../src/assets');
const autoprefixer = require('autoprefixer');

module.exports = {
    devtool: 'source-map',
    plugins:[
        new ExtractTextPlugin({
            filename: 'css/[name].css',
            allChunks: true
        }),
    ],

    module: {
        rules: [
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        { loader: 'css-loader', options: { minimize: true } },
                        {
                            loader: 'postcss-loader',
                            options: { 
                              config: {
                                path: require.resolve('./postcss.config.js')
                              }
                            }
                          },
                        'sass-loader'
                    ]
                })
            },
            {
				test: /\.(gif|png|jpg|jpeg|svg)$/,
				exclude: /node_modules/,
				use:[
						{
						loader: 'file-loader',
							options: {
							name: '[name].[ext]',
							publicPath: '/dist/',
							outputPath:'img/',
							useRelativePath: process.env.NODE_ENV === "production"
							}
						}  
					]
				
					
			}
                       
        ]
    }
}

