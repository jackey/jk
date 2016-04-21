import React from 'react';
import {Link} from 'react-router';
import NavLink from '../NavLink';
import cssModules from 'react-css-modules';
import styles from './App.css';
import Header from '../Header';
import Footer from '../Footer';

import 'normalize.css/normalize.css';
import 'font-awesome/css/font-awesome.css';

class App extends React.Component {

	render() {
		return (
			<div styleName="container">
				<Header />

				<div styleName="appBody">
					{this.props.children}
				</div>

				<Footer />
			</div>
		);
	}
}

export default cssModules(styles)(App)