import {
	GraphQLObjectType,
	GraphQLNonNull,
	GraphQLString,
	GraphQLID,
} from 'graphql';

export default new GraphQLObjectType({
	name: 'Product',
	fields: {
		_id: {
			type: new GraphQLNonNull(GraphQLID),
		},
		name: {
			type: GraphQLString
		},
		description: {
			type: GraphQLString
		}
	}
})
