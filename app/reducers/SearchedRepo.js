import {
	SEARCH_KEYWORD_CHANGED
} from '../constants';

const initState = {
	repoList: []
}

export const SearchRepoListChanged = (state = initState, action)  => {
		console.log(['action', action.type, action]);
	if (action.type == SEARCH_KEYWORD_CHANGED) {
		return Object.assign({}, state, {
			repoList: action.repoList
		});
	}

	return state;
}