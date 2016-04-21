import {
	DEALER_UPLOADING_PRODUCT_DATA,
	DEALER_UPLOADED_PRODUCT_DATA
} from '../constants';
import fetch from 'isomorphic-fetch';

export const ProductUploadAction = (imageBlobs, description, price, stock, sku) => {
	return dispatch => {
		// 正在发布产品
		dispatch(() => {
			return {
				type: DEALER_UPLOADING_PRODUCT_DATA,
				product: {imageBlobs, description, price, stock, sku}
			};
		});
		// POST出品
		let form = new FormData();
		form.append('description', description);
		form.append('price', price);
		form.append('stock', stock);
		form.append('sku', sku);
		imageBlobs.forEach((image, index) => {
			form.append('images[]', image.file);
		});
		
		return fetch('/api/dealer/upload-product', {
			method: 'POST',
			body: form
		}).then((res) => {
			dispatch(() => {
				return {
					type: DEALER_UPLOADED_PRODUCT_DATA,
					product: {}
				};
			});
		});
	};
};  