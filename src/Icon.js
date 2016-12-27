import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

const propTypes = {
  type: PropTypes.string
  
};
/**
 *  badge 默认显示内容1
 */
const defaultProps = {
	clsPrefix: 'uf'
};

class Icon extends Component {
	constructor(props) {
		super(props);
	}
	render(){
		let {type,className,clsPrefix, ...others} = this.props;
		let clsObj = {};
		
		let classNames = classnames(clsPrefix,type);

		return(
			<i {...others} className={classnames(classNames,className)}></i> 
		)
	}
}
Icon.defaultProps = defaultProps;
Icon.PropTypes = PropTypes;

export default Icon;