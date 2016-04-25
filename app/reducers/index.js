import {combineReducers} from 'redux';
import DealerProduct from './DealerProduct';
import {SearchRepoListChanged} from './SearchedRepo';
import {ImageUploadPreview, UploadProduct} from './DealerUploadProduct';

const SimpleComm = combineReducers({
	DealerProduct,
	ImageUploadPreview,
	UploadProduct,
	SearchRepoListChanged
});

export default SimpleComm