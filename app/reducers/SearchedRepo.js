import {
	SEARCH_KEYWORD_CHANGED
} from '../constants';

const initState = {
	repoList: []
}

export const SearchRepoListChanged = (state = initState, action)  => {
	if (action.type == SEARCH_KEYWORD_CHANGED) {
		return Object.assign({}, state, {
			repoList: action.repoList
		});
	}

	return state;
}