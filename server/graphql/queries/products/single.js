import {
	GraphQLList,
	GraphQLID,
	GraphQLNonNull
} from 'graphql';

import ProductType from '../../types/product';
import ProductModel from '../../../models/product';
import getProjection from '../../get-projection';

export default {
	type: ProductType,
	args: {
		id: {
			defaultValue: 0,
			type: new GraphQLNonNull(GraphQLID),
		}
	},
	async resolve(source, params, options) {
		const id = params['id'];
		try{
			const product = await ProductModel
				.find()
				.limit(1)
				.exec();

			return product.shift();
		}
		catch (err) {
			console.log(err);
		}

		return null;

	}
}