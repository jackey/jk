import React, {PropTypes} from 'react';
import Styles from './DealerQuickSellHome.css';
import {connect} from 'react-redux'
import cssModules from 'react-css-modules';
import 'font-awesome/css/font-awesome.css';
import 'normalize.css/normalize.css'

const mapStateToProps = (state) => {
	return {
		products: [
			{
				name: '测试产品A',
				description: '测试产品说明A',
				_id: 1,
				images: [
					"http://10-themes.com/data_images/wallpapers/24/373761-product.jpg",
					"http://10-themes.com/data_images/wallpapers/24/373761-product.jpg"
				],
				price: 1000, // 单位 分
				stock: 10, // 库存
			},
			{
				name: '测试产品B',
				description: '测试产品说明B',
				_id: 2,
				images: [
					"http://10-themes.com/data_images/wallpapers/24/373761-product.jpg",
					"http://10-themes.com/data_images/wallpapers/24/373761-product.jpg"
				],
				price: 1000, // 单位 分
				stock: 10, // 库存
			},
		]
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		
	}
}

class DealerQuickSellHome extends React.Component {

	render() {
		let products = this.props.products;
		let productComponentList = products.map( (product) => {
			return <li key={product._id}>
				<img styleName="img-in-product-list" src={product.images[0]} />
				<p styleName="desc-in-product-list">{product.description}</p>
				<span styleName="price-in-product-list">{product.price}</span>
			</li>
		});
		return (
			<div styleName="">
				<div styleName="stick-header">
					<ul styleName="clearfix">
						<li styleName="item"><a href="">我的订单</a></li>
						<li styleName="item"><a href="">我的收藏</a></li>
					</ul>
				</div>
				<div styleName="row">
					<input type="text" placeholder="快速搜索" />
				</div>
				<ul styleName="product-items">
					{productComponentList}
				</ul>
				<div styleName="stick-footer">
					<ul styleName="clearfix">
						<li styleName="item"><a href="">订单管理</a></li>
						<li styleName="item"><a href="">商品管理</a></li>
						<li styleName="item"><a href="/dealer/upload-product">快速发布</a></li>
					</ul>
				</div>
			</div>
		); 
	}
}

DealerQuickSellHome.propTypes = {
	products: PropTypes.array
};

export default connect(mapStateToProps, mapDispatchToProps)(cssModules(Styles, {allowMultiple: true, errorWhenNotFound: false})(DealerQuickSellHome))



