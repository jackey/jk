import React from 'react';
import cssModules from 'react-css-modules';
import styles from './HomeRoute.css';
import {connect} from 'react-redux';
import {cssModules as cssModulesConfig } from '../../config.js';
import {SearchKeywordChanged} from '../../actions/SearchActions';

const mapStateToProps = (state) => {
	console.log(state);
	return {
		repoList: state.SearchRepoListChanged.repoList
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		KeywordChanged: (keyword) => {
			dispatch(SearchKeywordChanged(keyword));
		}
	}
}

class HomeRoute extends React.Component {

	handleSubmit(event) {
		event.preventDefault();

		let url_or_name = this._elementUrl.value;
		this.props.KeywordChanged(url_or_name);

		return false;
	}

	componentDidMount() {
		this._elementUrl.focus();
	}

	render() {
		let repoListComponent = this.props.repoList.map((repo) => {
			return <li key={repo.id}><a href={repo.url}>{repo.name}</a></li>
		});
		return (
			<div styleName="home">
				<form onSubmit={this.handleSubmit.bind(this)}>
					<div styleName="form-row">
						<div styleName="search-region">
							<input type="text" ref={ (input) => this._elementUrl = input } name="url"  styleName="input-github-url" placeholder="如: http://github.com/jackey/jk" />
							<div styleName="search-results">
								<ul>
									{repoListComponent}
								</ul>
							</div>
						</div>
						<button type="submit" styleName="btn-submit btn-submit-github">获取分享页面</button>
					</div>
				</form>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(cssModules(styles, {
	...cssModulesConfig
})(HomeRoute));