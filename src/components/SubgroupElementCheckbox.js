import React from 'react';


const SubgroupElementCheckbox = props => {
  
	return (
		<div className="subgroup-element">
			<input type="checkbox" className="subgroup-input-checkbox" onClick={props.onClick} name={props.name} value={props.value} checked={props.checked}/>
			<span className="subgroup-input-checkbox-span">{props.spanText}</span>
		</div>
	);
};


export default SubgroupElementCheckbox;