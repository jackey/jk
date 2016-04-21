import React from 'react';
import cssModules from 'react-css-modules';
import styles from './Footer.css';

class Footer extends React.Component {

	render() {

		return (
			<div styleName="footer">
				<h5>简单电商 - 官方平台 @CopyRight</h5>
			</div>
		);
	}
}

export default cssModules(styles)(Footer);