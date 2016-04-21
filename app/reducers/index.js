import {combineReducers} from 'redux';
import DealerProduct from './DealerProduct';
import {ImageUploadPreview, UploadProduct} from './DealerUploadProduct';


const SimpleComm = combineReducers({
	DealerProduct,
	ImageUploadPreview,
	UploadProduct
});

export default SimpleComm