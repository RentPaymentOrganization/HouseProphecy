import React from 'react';
import PropTypes from 'prop-types';

const Subgroup = props => {
	return (
		<div className={props.className? props.className:'subgroup'}>
			<div className={props.classNameST? props.classNameST: 'subgroup-title'}>{props.titleSubgroup}</div>
			{props.children}
		</div>
	);
};

Subgroup.propTypes = {
	titleSubgroup: PropTypes.string
};

export default Subgroup;