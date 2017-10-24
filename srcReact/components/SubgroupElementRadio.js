import React from 'react';
import PropTypes from 'prop-types';

const SubgroupEleemntRadio = props => {
	return (       
		<div className={props.className}>			
				<input type="radio" name={props.name} id={props.name+props.value} className="subgroup-input-radio" value={props.value} defaultChecked={props.defaultChecked}/>		
				<label htmlFor={props.name+props.value} className="subgroup-input-radio-span"><span>{props.spanText}</span></label>
		</div>
        
	);
};

SubgroupEleemntRadio.propTypes = {
	name:PropTypes.string.isRequired,
	value:PropTypes.any.isRequired,
	spanText:PropTypes.any
};

export default SubgroupEleemntRadio;