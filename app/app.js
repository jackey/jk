import React from 'react';
import ReactDom from 'react-dom';
import {Router, Route, browserHistory , IndexRoute } from 'react-router';
import App from './components/App';
import JK from './reducers';
import {createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux'; 
import chunk from 'redux-thunk';


let store = createStore(JK, applyMiddleware(chunk));

// routes
import HomeRoute from './routes/HomeRoute';

// 生成Repo 页面
import RepoGenerate from './routes/RepoGenerate';

// 路由配置
ReactDom.render((
	<Provider store={store}>
		<Router history={browserHistory} >
			<Route path="/" component={App}>
				<IndexRoute component={HomeRoute} />
	
				<Route path="repo/generate" component={RepoGenerate} />

			</Route>

		</Router>

	</Provider>), document.getElementById('body'));