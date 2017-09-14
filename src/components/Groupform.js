import React from 'react';
import PropTypes from 'prop-types';

const Groupform = (props) => {    
	return (
		<div className="group clearfix">
			<div className="group-title">{props.titleGroup}</div>
			{props.children}
		</div>
	);
};

Groupform.propTypes = {
	titleGroup:PropTypes.string
};

export default Groupform;