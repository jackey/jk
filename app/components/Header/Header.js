import React from 'react';
import cssModules from 'react-css-modules';
import styles from './Header.css';

class Header extends React.Component {

	render() {

		return (
			<div styleName="header">
				<h1>简单电商 - 官方平台</h1>
			</div>
		);
	}
}

export default cssModules(styles)(Header);