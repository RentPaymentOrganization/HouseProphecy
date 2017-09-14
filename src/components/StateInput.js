import React, { Component } from 'react';

//dropdown state input hide window
function dropdownSearchWindowHide() {
	let win = document.querySelector('.state-input-window');
	win.innerHTML = '';
	win.classList.remove('active');
}

class StateInput extends Component {
	constructor(props){
		super(props);
		this.state={
			states:this.props.states,
			statesArray:this.props.states
		}
		this.handleKeyUp= this.handleKeyUp.bind(this);      
	}

	handleKeyUp(e){
        
		let stateInput=e.target;
		let result = this.searchStates(stateInput.value);
		this.setState({states:result},() => {
			if (this.state.states.length>0 && stateInput.value) {                                                    
				let stateList = this.createStateList(result);
				this.dropdownSearchWindowShow(stateList);
			} else {
				dropdownSearchWindowHide();
			}
		});        
       
	}

	searchStates(name) {
		let res = this.state.statesArray.filter(function(item) {
			let newItem = item.toLowerCase();
			if (newItem.indexOf(name.toLowerCase()) + 1) {
				return item;
			}
		});    
		return res;
       
	}
    
	createStateList() {
		if (this.state.states.length>0) {
          
			let list = `<ul class="state-input-window-list">`;
			let states = this.state.states;           
			states.forEach(function(item) {
				list += `<li class="state-input-window-list-li">${item}</li>`;
			});
			list += `</ul>`;
			return list;
		}
		return false;
	}
    
	dropdownSearchWindowShow(result) {
		if (result) {
			let win = document.querySelector('.state-input-window');
			win.innerHTML = result;
			var listState = document.querySelector('.state-input-window-list');
    
			listState.addEventListener('click', function(e) {
    
				if (e.target.className === 'state-input-window-list-li') {
					let stateInput = document.querySelector('.state-input');
					stateInput.value = e.target.innerText;
					dropdownSearchWindowHide();
				}
			});
    
			win.classList.add('active');
    
		}
    
	}   
    

	render() {
		return (
			<span>
				<input type="text" className="subgroup-input state-input" name="State" onChange={this.handleKeyUp}/>
				<span className="state-input-window"></span>
			</span>
		);
	}
}

export default StateInput;