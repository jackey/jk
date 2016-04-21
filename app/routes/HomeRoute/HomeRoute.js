import React from 'react';
import cssModules from 'react-css-modules';
import styles from './HomeRoute.css';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
	return {

	}
}

const mapDispatchToProps = (dispatch) => {
	return {

	}
}

class HomeRoute extends React.Component {

	render() {
		return (
			<div styleName="home">简单电商首页</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(cssModules(styles)(HomeRoute));