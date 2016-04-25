import {
	SEARCH_KYEWORD_CHANGING,
	SEARCH_KEYWORD_CHANGED
} from '../constants';

import {Github} from '../config.js';
import fetch from 'isomorphic-fetch';

export const SearchKeywordChanged = (keyword) => {
	return (dispatch) => {
		dispatch(() => {
			return {
				type: SEARCH_KYEWORD_CHANGING
			}
		});

		const host = Github.host;
		const api = 'search/repositories';
		let queryParams = `q=${keyword} in:name`;

		fetch(`${host}/${api}?${queryParams}`)
			.then(function (res) {
				return res.text();
			})
			.then(function (body) {
				let data = JSON.parse(body);
				let repoList = data['items'].map( item => {
					return {
						id: item['id'],
						name: item['name'],
						url: item['html_url'],
					}
				});
				dispatch({
						type: SEARCH_KEYWORD_CHANGED,
						repoList: repoList
				});
			});
	};
}