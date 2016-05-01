import {
	UPDATE_REPO_INFO
} from '../constants';

const initState = {
	full_name: '',
	readme: ''
}

export const RepoInfo = (state = initState, action) => {

	if (action.type == UPDATE_REPO_INFO) {
		return Object.assign({}, state, action.RepoInfo);
	}
	return state;
}