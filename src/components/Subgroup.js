import React from 'react';
import PropTypes from 'prop-types';

const Subgroup = props => {
	return (
		<div className={ props.className?'subgroup ' + props.className:'subgroup'}>
			<div className="subgroup-title">{props.titleSubgroup}</div>
			{props.children}
		</div>
	);
};

Subgroup.propTypes = {
	titleSubgroup: PropTypes.string
};

export default Subgroup;