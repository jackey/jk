import React from 'react';
import cssModules from 'react-css-modules';
import styles from './HomeRoute.css';
import {connect} from 'react-redux';
import {cssModules as cssModulesConfig } from '../../config.js';
import {SearchKeywordChanged} from '../../actions/SearchActions';

const mapStateToProps = (state) => {
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

	}
	handleGithubNameChanged(event) {
		event.preventDefault();

		let url_or_name = this._elementUrl.value;

		this._debounce( this.props.KeywordChanged , url_or_name);

		return false;
	}

	componentDidMount() {
		this._elementUrl.focus();
		this._debounce = (()  => {
			let timer = null;

			return (fn, ...args) => {
				if (timer) {
					clearTimeout(timer);
				}
				timer = setTimeout(() => {
					fn.apply(this, args);
				}, 500);
			}
		})();

		document.addEventListener('click', (event) =>  {
			let target = event.target;
			console.log(this._homeElement);
		});
	}

	searchItemClicked(repo) {
		this.context.router.push({
			pathname: 'repo/generate',
			query: {
				repo: repo['full_name']
			}
		});
	}

	render() {
		let repoListComponent = this.props.repoList.map((repo) => {
			return <li onClick={this.searchItemClicked.bind(this, repo)} key={repo.id}><a href="javascript:void(0)">{repo.name}</a></li>
		});
		return (
			<div styleName="home">
				<form onSubmit={this.handleSubmit.bind(this)}>
					<div styleName="form-row">
						<div styleName="search-region">
							<input type="text" 
									ref={ (input) => this._elementUrl = input } 
									name="url" 
									onChange={this.handleGithubNameChanged.bind(this)} 
									styleName="input-github-url" 
									placeholder="如: http://github.com/jackey/jk" />

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

HomeRoute.contextTypes = {
	router: React.PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(cssModules(styles, {
	...cssModulesConfig
})(HomeRoute));