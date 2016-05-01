import express from 'express';
import graphqlHTTP from 'express-graphql';
import general, {mongodb, backend} from './config/config.dev.js';
import schema from './graphql'; 
import mongoose from 'mongoose';
import ProductModel from './models/product';

mongoose.Promise = require('bluebird');

// 链接数据库
mongoose.connect(`mongodb://${mongodb.host}/${mongodb.db}`);

let app = express();

app.use('/graphql', graphqlHTTP({schema: schema, pretty: true}));

app.get('/backend', (req, res)  => {
	res.send('Hello Simple comm!');
});

app.get('/backend/save/repo', (req, res) => {
	res.send('backend/save/repo');
}); 

export default app;