import React from 'react';
import PropTypes from 'prop-types';

const Select = props => {

	return (
		<select name={props.name}  className={props.className}>
			{props.children}
		</select>
	);
};

Select.propTypes = {
	name:PropTypes.string.isRequired
};

export default Select;