import React from 'react';
import PropTypes from 'prop-types';

const SubgroupEleemntRadio = props => {
	return (       
		<div className="subgroup-element">
			<input type="radio" name={props.name} className="subgroup-input-radio" value={props.value} defaultChecked={props.defaultChecked}/>
			<span className="subgroup-input-radio-span">{props.spanText}</span>
		</div>
        
	);
};

SubgroupEleemntRadio.propTypes = {
	name:PropTypes.string.isRequired,
	value:PropTypes.any.isRequired,
	spanText:PropTypes.any
};

export default SubgroupEleemntRadio;