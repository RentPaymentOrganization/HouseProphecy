import React, {Component} from 'react';
import Groupform from './Groupform';
import Subgroup from './Subgroup';
import Input from './Input';
import StateInput from './StateInput';
import states from '../store/states';
import Select from './Select';
import Button from './Button';
import RangeSlider from './rangeSlider';
import SubgroupElementRadio from './SubgroupElementRadio';
import CheckboxList from './CheckboxList';
import housingCheckboxesData from '../store/housingCheckboxes';
import parkingCheckboxesData from '../store/parkingCheckboxes';
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
			<form id="main-form">			
				<Groupform titleGroup="Address">
					<Subgroup titleSubgroup="State" className="no-margin-left subgroup-state">                   
						<StateInput states={states}/>
					</Subgroup>
					<Subgroup titleSubgroup="ZIP Code">                 
						<Input type="text" name="ZipCode" className="subgroup-input"/>
					</Subgroup>
					<Subgroup titleSubgroup="County">                 
						<Input type="text" name="County" className="subgroup-input"/>
					</Subgroup>
					<Subgroup titleSubgroup="City">                 
						<Input type="text" name="City" className="subgroup-input"/>
					</Subgroup>
					<Subgroup titleSubgroup="Street">                 
						<Input type="text" name="Street" className="subgroup-input"/>
					</Subgroup>
					<Subgroup titleSubgroup="Street number"  className="no-margin-left">                 
						<Input type="text" name="StreetNumber" className="subgroup-input"/>
					</Subgroup>
				</Groupform>

				<Groupform titleGroup="Description">
					<Subgroup titleSubgroup="Bedrooms" className="subgroup no-margin-left">
						<Select name="BedRooms">
							<option value="0" className="subgroup-select-option">0</option>
							<option value="1" className="subgroup-select-option">1</option>
							<option value="2" className="subgroup-select-option">2</option>
							<option value="3" className="subgroup-select-option">3</option>
							<option value="4" className="subgroup-select-option">4</option>
							<option value="5" className="subgroup-select-option">5</option>
							<option value="6" className="subgroup-select-option">6</option>
							<option value="7" className="subgroup-select-option">7</option>
							<option value="8" className="subgroup-select-option">8</option>
							<option value="9" className="subgroup-select-option">9</option>
							<option value=">=9" className="subgroup-select-option">>=9</option>
						</Select>                   
					</Subgroup>

					<Subgroup titleSubgroup="Bathrooms" className="subgroup">
						<Select name="BathRooms">
							<option value="0" className="subgroup-select-option">0</option>
							<option value="1" className="subgroup-select-option">1</option>
							<option value="2" className="subgroup-select-option">2</option>
							<option value="3" className="subgroup-select-option">3</option>
							<option value="4" className="subgroup-select-option">4</option>
							<option value="5" className="subgroup-select-option">5</option>
							<option value="6" className="subgroup-select-option">6</option>
							<option value="7" className="subgroup-select-option">7</option>
							<option value="8" className="subgroup-select-option">8</option>
							<option value="9" className="subgroup-select-option">9</option>
							<option value=">=9" className="subgroup-select-option">>=9</option>
						</Select>               
					</Subgroup>
					<Subgroup titleSubgroup="Square" className="subgroup">
						<RangeSlider min={100} max={11000}/>
					</Subgroup>
				</Groupform>

				<Groupform titleGroup="Main attributes">
					<Subgroup titleSubgroup="Cats ok" className="subgroup no-margin-left">
						<SubgroupElementRadio name="CatsOk" value="NoMatter" spanText="no matter" defaultChecked="checked"/>
						<SubgroupElementRadio name="CatsOk" value="Yes" spanText="yes"/>
						<SubgroupElementRadio name="CatsOk" value="No" spanText="no"/>
					</Subgroup>
					<Subgroup titleSubgroup="Dogs ok" className="subgroup">
						<SubgroupElementRadio name="DogsOk" value="NoMatter" spanText="no matter"  defaultChecked="checked"/>
						<SubgroupElementRadio name="DogsOk" value="Yes" spanText="yes"/>
						<SubgroupElementRadio name="DogsOk" value="No" spanText="no"/>
					</Subgroup>
					<Subgroup titleSubgroup="Furnished" className="subgroup">
						<SubgroupElementRadio name="Furnished" value="NoMatter" spanText="no matter"  defaultChecked="checked"/>
						<SubgroupElementRadio name="Furnished" value="Yes" spanText="yes"/>
						<SubgroupElementRadio name="Furnished" value="No" spanText="no"/>
					</Subgroup>
					<Subgroup titleSubgroup="No smoking" className="subgroup">
						<SubgroupElementRadio name="NoSmokinkg" value="NoMatter" spanText="no matter"  defaultChecked="checked"/>
						<SubgroupElementRadio name="NoSmokinkg" value="Yes" spanText="yes"/>
						<SubgroupElementRadio name="NoSmokinkg" value="No" spanText="no"/>
					</Subgroup>
					<Subgroup titleSubgroup="Wheelchair access" className="subgroup">
						<SubgroupElementRadio name="WheelchairAccessible" value="NoMatter" spanText="no matter"  defaultChecked="checked"/>
						<SubgroupElementRadio name="WheelchairAccessible" value="Yes" spanText="yes"/>
						<SubgroupElementRadio name="WheelchairAccessible" value="No" spanText="no"/>
					</Subgroup>
				</Groupform>

				<Groupform titleGroup="Housing type">
					<CheckboxList data={housingCheckboxesData}/>
				</Groupform>

				<Groupform titleGroup="Laundry">
					<Subgroup className="subgroup no-margin-left">
						<SubgroupElementRadio name="Laundry" value="NoMatter" spanText="no matter"  defaultChecked="checked"/>
						<SubgroupElementRadio name="Laundry" value="InUnit" spanText="W/d in unit and  w/d hookups"/>
						<SubgroupElementRadio name="Laundry" value="Hookups" spanText="W/d hookups"/>
					</Subgroup>
					<Subgroup className="subgroup">
						<Select name="LaundrySeparation">
							<option value="NoMatter" className="subgroup-select-option">No matter</option>        
							<option value="InBldg" className="subgroup-select-option">Laundry in bldg</option>    
							<option value="OnSite" className="subgroup-select-option">Laundry on site</option>         
							<option value="NoOnSite" className="subgroup-select-option">No laundry on site</option>         
						</Select>               
					</Subgroup>
				</Groupform>
				<Groupform titleGroup="Parking">
					<CheckboxList data={parkingCheckboxesData}/>
				</Groupform>
				<Button textBtn="getPrice" className="submit-button" onClick={this.getPrice}/>
				<Button textBtn="getInfo" className="get-info-button" onClick={this.getInfo}/>
			</form>
		)
	}
}

export default Form;