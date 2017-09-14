import React from 'react';
import PropTypes from 'prop-types';

const Input = props => {
	return (
		<input type={props.type} name={props.name} {...props}/>
	);
};

Input.propTypes = {
	type: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
};

export default Input;