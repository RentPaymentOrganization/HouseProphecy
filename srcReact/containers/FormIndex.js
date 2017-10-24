import React, {Component} from 'react';
import { Link } from 'react-router';
import Groupform from '../components/Groupform';
import Input from '../components/Input';
import StateInput from '../components/StateInput';
import states from '../store/states';
import Button from '../components/Button';

class Form extends Component{	
		constructor(props){
			super(props);					
			this.getPrice=this.getPrice.bind(this);
			this.getInfo=this.getInfo.bind(this);
		}

		getPrice(e){			
			e.preventDefault();			
			this.props.onGetPrice();		
		}

		getInfo(e){			
			e.preventDefault();				
			this.props.onGetInfo();	
			
		}

	render(){		
		return (
			<form id="main-form" className="main-form-index">			
				<Groupform className="no-margin-top group clearfix">                 
					<StateInput states={states}/>			                 
					<Input type="text" name="ZipCode" className="input input-zip" placeholder="ZIP Code"/>							           
					<Input type="text" name="County" className="input input-county" placeholder="County"/>            
					<Input type="text" name="City" className="input input-city" placeholder="City"/>			        
					<Input type="text" name="Street" className="input input-street" placeholder="Street"/>
					<Input type="text" name="StreetNumber" className="input input-streetnum" placeholder="Street number"/>
				</Groupform>
				<Link to="/advanced" className="advanced-search-link link">Advances search</Link>							
				<Button textBtn="Get price" className="submit-button button" onClick={this.getPrice}/>
				<Button textBtn="Get info" className="get-info-button button" onClick={this.getInfo}/>
			</form>
		)
	}
}

export default Form;

