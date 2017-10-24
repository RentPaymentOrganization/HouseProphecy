import React, { Component } from 'react';
import SubgroupElementCheckbox from './SubgroupElementCheckbox';
import SelectAllLink from './SelectAllLink';

class CheckboxList extends Component {
	constructor(props){
		super(props)      
		this.state={
			data:this.props.data,
			checked:false,
			buttonText:'Select all'
		}
		this.handleSelectAll=this.handleSelectAll.bind(this);
		this.handleDeSelectAll=this.handleDeSelectAll.bind(this);
		this.changeInputChecked=this.changeInputChecked.bind(this);
	}

	handleSelectAll(e){
		e.preventDefault();
		let newData=[];
		this.state.data.forEach(
			(item) =>   {
				item.checked=true;
				newData.push(item);
			}
		);
		this.setState({
			data:newData,
			checked:true,
			buttonText:'Deselect all'
		});
	}

	handleDeSelectAll(e){
		e.preventDefault();
		let newData=[];       
		this.state.data.forEach(
			(item) =>   {
				item.checked=false;
				newData.push(item);
			}
		);
		this.setState({
			data:newData,
			checked:false,
			buttonText:'Select all'
		});
	}

	changeInputChecked(e){       
		let newData=[];
      
		this.state.data.forEach(
			(item) =>   {
				if(item.name===e.target.name){                   
					item.checked?item.checked=false:item.checked=true;                    
				}                
				newData.push(item);
			}
		);
       
		this.setState({
			data:newData,
		});
       
	}
    
	render() {
        
		let checkBoxList = this.state.data.map(
			(item,i) =>   {
				return  <SubgroupElementCheckbox 
												className={(i==0)?"first-subgroup-element-checkbox subgroup-element":"subgroup-element"}
												key={item.name} checked={item.checked ? true : false}
												name={item.name} value={item.value}
												onClick={this.changeInputChecked}
												spanText={item.spanText}
												/>
			}
		);

		return (
			<div className="subgroup-elements-container">                
				{checkBoxList}   
				<SelectAllLink onClick={this.state.checked? this.handleDeSelectAll : this.handleSelectAll} text={this.state.buttonText}/>  
			</div>
		);
	}
}

export default CheckboxList;