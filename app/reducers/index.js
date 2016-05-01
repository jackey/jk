import {combineReducers} from 'redux';
import {SearchRepoListChanged} from './SearchedRepo';
import {RepoInfo} from './RepoInfo';

const JK = combineReducers({
	SearchRepoListChanged,
	RepoInfo
});

export default JK