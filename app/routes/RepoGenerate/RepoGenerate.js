import React from 'react';
import Styles from './RepoGenerate.css';
import cssModules from 'react-css-modules';
import {connect} from 'react-redux';
import {cssModules as cssModulesConfig} from '../../config.js';
import {UpdateRepoInfoAction} from '../../actions/RepoInfoAction';

const mapStateToProps = (state) => {
	return {
		RepoInfo: state.RepoInfo
	};
}

const mapDispatchToProps = (dispath)  => {
	return {
		updateRepoInfo: (full_name) => {
			dispath(UpdateRepoInfoAction(full_name));
		}
	};
}

class RepoGenerate extends React.Component {
	createReadmeMarkup() {
		return {__html: this.props.RepoInfo.readme}
	}
	componentDidMount() {
		let {query} = this.props.location;
		let repo = query && query.repo ? query.repo : '';
		if (repo.length <= 0) {
			this.context.router.push({
				path: '/'
			});
		}
		else {
			this.props.updateRepoInfo(repo);
		}
	}

	render() {
		return (
			<div>
				<h3>{this.props.RepoInfo.full_name}</h3>
				<div dangerouslySetInnerHTML={this.createReadmeMarkup()} />
			</div>
		);
	}
}


RepoGenerate.contextTypes = {
	router: React.PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(cssModules(Styles, {
	...cssModulesConfig
})(RepoGenerate));

