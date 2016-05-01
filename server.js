import path  from 'path';
import express from 'express';
import webpack from 'webpack';
import config from './webpack.config.dev';

import app from './backend';
let port = 4000;
let compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
	noInfo: true,
	publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use('/static', (req, res) => {
	res.send('hello, static');
});

app.get('*',  (req, res) =>  {
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
