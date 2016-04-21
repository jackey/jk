var path = require('path');
var webpack = require('webpack');

var config = {
	devtool: 'source-map',
	entry: [
		'./app/app.js'
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/dist',
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			compressor: {
				warnings: false
			}
		}),
		new webpack.NoErrorsPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production'),
			}
		})
	],
	module: [
		{
			test: /\.js$/,
			loaders: ['babel'],
			exclude: /node_modules/,
		},
		{
			test: /^\.css/,
			exclude: /node_modules/,
			loaders: [
				'style?sourceMap', 
				'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
				'cssnext'
			]
		}
	]
};

module.exports = config;