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

		if (keyword.length <= 0) {
			dispatch({
				type: SEARCH_KEYWORD_CHANGED,
				repoList: []
			});
		}
		else {
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
							full_name: item['full_name'],
						}
					});
					dispatch({
							type: SEARCH_KEYWORD_CHANGED,
							repoList: repoList
					});
				});
		}
	};
}