import {
	DEALER_UPLOADING_PRODUCT_IMAGE
} from '../constants';

export function DealerUploadingImageAction(imageBlob) {
	return {
		type: DEALER_UPLOADING_PRODUCT_IMAGE,
		image: imageBlob
	}
}

