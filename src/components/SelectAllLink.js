import React from 'react';



function SelectAllLink(props) {       
	return (
		<div className="subgroup-element">
			<a href="javascript:void(0)" className="subgroup-input-checkbox-select-all" onClick={props.onClick}>{props.text}</a>
		</div>
	);
   
}

export default SelectAllLink;