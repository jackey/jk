import mongoose from 'mongoose';

var productSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: false
	}
});

export default mongoose.model('Product', productSchema);