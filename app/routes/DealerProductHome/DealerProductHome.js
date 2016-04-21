import React , {PropTypes} from 'react';
import {connect} from 'react-redux';
import cssModules from 'react-css-modules';
import styles from './DealerProductHome.css';

const mapStateToProps = (state) => {
	return {
		products: state.DealerProduct
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		searchProduct: (name) => {
			console.log(name);
		}
	}
}

class DealerProductHome extends React.Component {
	render() {
		return (
			<div styleName="dealer-product-container">
				<div styleName="search-box">
					<input type="text" placeholder="产品名称" onChange={e => {this.props.searchProduct(e.target.value)}}/>
				</div>
				
			</div>

		);
	}
}


DealerProductHome.propTypes = {
	products: PropTypes.array.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(cssModules(styles)(DealerProductHome));