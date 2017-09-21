import React from 'react';
import PropTypes from 'prop-types';

const Groupform = (props) => {    
	return (
		<div className={props.className?props.className:'group clearfix'}>
			<div className={props.classNameHeaderSub?props.classNameHeaderSub:"header-sub"}>{props.titleGroup}</div>
			{props.children}
		</div>
	);
};

Groupform.propTypes = {
	titleGroup:PropTypes.string
};

export default Groupform;