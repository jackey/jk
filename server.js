var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.dev');

var port = 3000;
var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
	noInfo: true,
	publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use('/static', (req, res) => {
	res.send('hello, static');
});

app.get('*', function (req, res) {
	console.log('client connect from ' + req.connection.remoteAddress);
	res.sendFile(path.join(__dirname, 'app/index.html'));
});

app.listen(port, function (err) {
	if (err) {
		console.log(err);
	}
	else {
		console.log("Server listen on http://127.0.0.1:" + port );
	}
});