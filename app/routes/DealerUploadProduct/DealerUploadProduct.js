import React, {PropTypes} from 'react';
import Styles from './DealerUploadProduct.css';
import cssModules from 'react-css-modules';
import {connect} from 'react-redux';
import  {DealerUploadingImageAction} from '../../actions/ProductImageActions';
import ImagePreview from '../../components/ImagePreview';
import {ProductUploadAction} from '../../actions/ProductActions';


const mapStateToProps = (state) => {
	return {
		//
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		uploadProduct: (product) => {
			dispatch(ProductUploadAction(product.uploadingImages, product.description, product.price, product.stock, product.sku));
		}
	}
};

class DealerUploadProduct extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			uploadingImages: []
		};
	}

	onUploadImageClick (event){
		var imageReader = new FileReader();
		var input = event.target;
		var self = this;
		imageReader.onload = function (e) {
			self.setState(Object.assign(self.state, {
				uploadingImages: [...self.state['uploadingImages'], { base64: e.target.result, file: input.files[0]}]
			}));
		};

		imageReader.readAsDataURL(input.files[0]);
	}

	valueChanged(name, event) {
		this.setState({[name]: event.target.value});
	}

	onSubmit(event) {
		event.preventDefault();
		var product = this.state;
		this.props.uploadProduct(product);
		return false;
	}

	render() {
		let imagePreviewList = this.state.uploadingImages.map( (image ,index)=> {
			return <li key={index}><ImagePreview image={image.base64} /></li>
		});

		return (
			<div styleName="seller-upload-product">
				<form onSubmit={this.onSubmit.bind(this)}>
					<div styleName="image-upload-region">
						<ul styleName="clearfix">
							{imagePreviewList}
						</ul>
						<input type="file" onChange={this.onUploadImageClick.bind(this)} accept="image/*" />
					</div>

					<textarea name="description" value={this.state.description || ''} onChange={this.valueChanged.bind(this, 'description')} />
	 
					<input type="text" name="price" placeholder="价格" value={this.state.price || ''} onChange={this.valueChanged.bind(this, 'price')} />
					<input type="text" name="stock" placeholder="库存" value={this.state.stock || ''} onChange={this.valueChanged.bind(this, 'stock')} />
					<input type="text" name="sku" placeholder="商品编号" value={this.state.sku || ''} onChange={this.valueChanged.bind(this, 'sku')} />

					<button type="submit">提交</button>
				</form>

			</div>
		);
	}
}

DealerUploadProduct.propTypes = {

};

export default connect(mapStateToProps, mapDispatchToProps)(cssModules(Styles, {
	allowMultiple: true, 
	errorWhenNotFound: false
})(DealerUploadProduct));