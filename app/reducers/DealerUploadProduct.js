import {
	DEALER_UPLOADING_PRODUCT_IMAGE,
	DEALER_UPLOADING_PRODUCT_DATA
} from '../constants';

const initState = {
	uploadingImages: [],
	description: '',
	price: 0,
	stock: 0,
	sku: ''
};

export const ImageUploadPreview = (state = initState, action) => {
	if (action.type == DEALER_UPLOADING_PRODUCT_IMAGE) {
		var uploadingImages = [...state.uploadingImages, action.image];
		return Object.assign({}, state, {uploadingImages});
	}

	return state;
};


export const UploadProduct = (state = initState, action) => {
	if (action.type == DEALER_UPLOADING_PRODUCT_DATA) {
		return Object.assign({}, state, action.product);
	}

	return state;
};
