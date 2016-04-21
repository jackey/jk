import React from 'react';
import Styles from './ImagePreview.css';
import cssModules from 'react-css-modules';

class ImagePreview extends React.Component {

	render() {
		return <img src={this.props.image} />
	}
}

export default cssModules(Styles)(ImagePreview)