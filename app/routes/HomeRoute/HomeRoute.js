import React from 'react';
import cssModules from 'react-css-modules';
import styles from './HomeRoute.css';
import {connect} from 'react-redux';
import {cssModules as cssModulesConfig } from '../../config.dev.js';

const mapStateToProps = (state) => {
	return {

	}
}

const mapDispatchToProps = (dispatch) => {
	return {

	}
}

class HomeRoute extends React.Component {

	handleSubmit(event) {
		event.preventDefault();

		return false;
	}

	render() {
		return (
			<div styleName="home">
				<form onSubmit={this.handleSubmit.bind(this)}>
					<div styleName="form-row">
						<input type="text" name="url" styleName="input-github-url" placeholder="如: http://github.com/jackey/jk" />
						<button styleName="btn-submit btn-submit-github">获取分享页面</button>
					</div>
				</form>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(cssModules(styles, {
	...cssModulesConfig
})(HomeRoute));