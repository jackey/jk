import {
	UPDATE_REPO_INFO
} from '../constants';

import {Github} from '../config';
import fetch from 'isomorphic-fetch';


export const UpdateRepoInfoAction = (repoFullName) => {
	return (dispatch) => {

		const host = Github.host;
		const api = `repos/${repoFullName}/readme`;

		fetch(`${host}/${api}`, {
			headers: {
				'Accept': 'application/vnd.github.VERSION.html'
			}
		}).then((res) => {
			return res.text();
		}).then((body) => {
			dispatch({
				type: UPDATE_REPO_INFO,
				RepoInfo: {
					full_name: repoFullName,
					readme: body
				}
			});
		});

		dispatch({
			type: UPDATE_REPO_INFO,
			RepoInfo: {
				full_name: repoFullName,
				readme: 'repo 解析中...'
			}
		});
	}
} 