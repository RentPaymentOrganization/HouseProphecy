import React from 'react';


const SubgroupElementCheckbox = props => {
  
	return (
		<div className={props.className}>
			<input type="checkbox" className="subgroup-input-checkbox" onClick={props.onClick} id={props.name+props.value} name={props.name} value={props.value} checked={props.checked}/>
			<label htmlFor={props.name+props.value} className="subgroup-input-checkbox-span"><span>{props.spanText}</span></label>
		</div>
	);
};


export default SubgroupElementCheckbox;