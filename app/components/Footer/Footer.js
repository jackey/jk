import React from 'react';
import cssModules from 'react-css-modules';
import styles from './Footer.css';

class Footer extends React.Component {

	render() {

		return (
			<div styleName="app-footer">
				<h5 styleName="footer-title">我是码农 我为自己代言</h5>
			</div>
		);
	}
}

export default cssModules(styles)(Footer);