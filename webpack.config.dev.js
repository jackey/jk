var path = require('path');
var webpack = require('webpack');

var config = {
	devtool: 'cheap-module-eval-source-map',
	entry: [
		'./app/app.js',
		'webpack-hot-middleware/client'
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/dist',
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
	module: {
		loaders: [
			{
				test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: 'url?name=fonts/[name].[ext]' + '&limit=10000&minetype=application/font-woff',
			},
			{
				test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				include: /font/,
				loader: 'file?name=fonts/[name].[ext]',
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/,
				exclude: /node_modules/,
				loader: 'file?name=assets/[name].[ext]',
			},
			{
				test: /\.js$/,
				loaders: ['babel'],
				exclude: /node_modules/,
			}, 
			{
				test: /\.css$/,
				exclude: /node_modules/,
				loaders: [
					'style?sourceMap', 
					'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
					'cssnext'
				]
			},
			{
				test: /\.css$/,
				include: /node_modules/,
				loaders: ['style', 'css'],
			}
		]
	}
};

module.exports = config;