import React from 'react';
import cssModules from 'react-css-modules';
import styles from './Header.css';

class Header extends React.Component {

	render() {

		return (
			<div styleName="header">
				<h1 styleName="header-title">"在您的朋友圈分享Gihub"</h1>
			</div>
		);
	}
}

export default cssModules(styles)(Header);