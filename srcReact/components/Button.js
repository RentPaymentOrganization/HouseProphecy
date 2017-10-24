import React from 'react';

const Button = (props) => {
	return (
		<button className={props.className} onClick={props.onClick}>{props.textBtn}</button>
	);
};

export default Button;