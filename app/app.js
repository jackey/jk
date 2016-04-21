import React from 'react';
import ReactDom from 'react-dom';
import {Router, Route, browserHistory , IndexRoute } from 'react-router';
import App from './components/App';
import SimpleComm from './reducers';
import {createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux'; 
import chunk from 'redux-thunk';


let store = createStore(SimpleComm, applyMiddleware(chunk));

// routes
import HomeRoute from './routes/HomeRoute';

// 卖家快速发布
import DealerQuickSellHome from './routes/DealerQuickSellHome';

// 发布产品
import DealerUploadProduct from './routes/DealerUploadProduct';


// 路由配置
ReactDom.render((
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={HomeRoute} />
			</Route>

		{/* Quick Sell*/}
			<Route path="/dealer/quick-sell" component={DealerQuickSellHome} />
			<Route path="/dealer/upload-product" component={DealerUploadProduct} />
		</Router>

	</Provider>), document.getElementById('body'));