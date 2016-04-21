import {
	DEALER_ONLINE_PRODUCT,
	DEALER_OFFLINE_PRODUCT,
	DEALER_UPLOADING_PRODUCT_DATA
} from '../constants';

const initState = [{
	name: '小孩衣服',
	id: 1,
	status: 1 , // 1: online, 0: offline
}];

const ActionProduct = (state, action) => {
	switch (action.type) {
		case DEALER_ONLINE_PRODUCT:
			return Object.assign({}, state, {
				status: 1
			});
		break;

		case DEALER_OFFLINE_PRODUCT:
			return Object.assign({}, state, {
				status: 0
			});
		break;
	}
}

const DealerProduct = (state = initState, action) => {
	switch (action.type) {
		case DEALER_OFFLINE_PRODUCT:
		case DEALER_ONLINE_PRODUCT:
			const id = action.id;
			return state.map(t => {
				if (t.id == id) {
					ActionProduct(t, action);
				}
			});
		case DEALER_UPLOADING_PRODUCT_DATA:
			let product = action.product;
			
			//TODO:: 上传产品
		return state;
	}

	return state;
}

export default DealerProduct;