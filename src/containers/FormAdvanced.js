import React, {Component} from 'react';
import Groupform from '../components/Groupform';
import Subgroup from '../components/Subgroup';
import Input from '../components/Input';
import StateInput from '../components/StateInput';
import states from '../store/states';
import Select from '../components/Select';
import Button from '../components/Button';
import RangeSlider from '../components/rangeSlider';
import SubgroupElementRadio from '../components/SubgroupElementRadio';
import CheckboxList from '../components/CheckboxList';
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
			<form id="main-form" className="main-form">			
				<Groupform className="no-margin-top group clearfix">                 
					<StateInput states={states}/>			                 
					<Input type="text" name="ZipCode" className="input input-zip" placeholder="ZIP Code"/>							           
					<Input type="text" name="County" className="input input-county" placeholder="County"/>            
					<Input type="text" name="City" className="input input-city" placeholder="City"/>			        
					<Input type="text" name="Street" className="input input-street" placeholder="Street"/>
					<Input type="text" name="StreetNumber" className="input input-streetnum" placeholder="Street number"/>
				</Groupform>
				<div class="hr"></div>
				<Groupform titleGroup="Description" classNameHeaderSub="header-sub description-header-sub">
					<Subgroup titleSubgroup="Bedrooms" className="subgroup no-margin-left" classNameST="subgroup-title-left subgroup-title">
						<Select name="BedRooms" className="select select-margin-left">
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

					<Subgroup titleSubgroup="Bathrooms" className="subgroup" classNameST="subgroup-title-left subgroup-title">
						<Select name="BathRooms"  className="select select-margin-left">
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
					<Subgroup titleSubgroup="Square" className="subgroup square-subgroup" classNameST="subgroup-title-left subgroup-title">
						<RangeSlider min={100} max={11000}/>
					</Subgroup>
				</Groupform>
				<div className="clearfix">
					<Groupform titleGroup="Main attributes" className="group clearfix main-attr-group" classNameHeaderSub="header-sub main-attr-sub">
						<div className="clearfix"> 
							<Subgroup titleSubgroup="Cats ok" className="subgroup no-margin-left main-attr-subgroup-title">
								<SubgroupElementRadio className="subgroup-element first-subgroup-element" name="CatsOk" value="NoMatter" spanText="No matter" defaultChecked="checked"/>
								<SubgroupElementRadio className="subgroup-element" name="CatsOk" value="Yes" spanText="Yes"/>
								<SubgroupElementRadio className="subgroup-element" name="CatsOk" value="No" spanText="No"/>
							</Subgroup>
							<Subgroup titleSubgroup="Dogs ok" className="subgroup  main-attr-subgroup-title main-attr-subgroup">
								<SubgroupElementRadio name="DogsOk" className="subgroup-element first-subgroup-element" value="NoMatter" spanText="No matter"  defaultChecked="checked"/>
								<SubgroupElementRadio name="DogsOk" className="subgroup-element" value="Yes" spanText="Yes"/>
								<SubgroupElementRadio name="DogsOk" className="subgroup-element" value="No" spanText="No"/>
							</Subgroup>
						</div>
						<div className="clearfix"> 
							<Subgroup titleSubgroup="Furnished" className="subgroup  main-attr-subgroup-title">
								<SubgroupElementRadio name="Furnished" className="subgroup-element first-subgroup-element" value="NoMatter" spanText="No matter"  defaultChecked="checked"/>
								<SubgroupElementRadio name="Furnished" className="subgroup-element" value="Yes" spanText="Yes"/>
								<SubgroupElementRadio name="Furnished" className="subgroup-element" value="No" spanText="No"/>
							</Subgroup>
							<Subgroup titleSubgroup="No smoking" className="subgroup  main-attr-subgroup-title  main-attr-subgroup">
								<SubgroupElementRadio name="NoSmokinkg" className="subgroup-element first-subgroup-element" value="NoMatter" spanText="No matter"  defaultChecked="checked"/>
								<SubgroupElementRadio name="NoSmokinkg" className="subgroup-element" value="Yes" spanText="Yes"/>
								<SubgroupElementRadio name="NoSmokinkg" className="subgroup-element" value="No" spanText="No"/>
							</Subgroup>
						</div>
						<div className="clearfix"> 
							<Subgroup titleSubgroup="Wheelchair access" className="subgroup">
								<SubgroupElementRadio name="WheelchairAccessible" className="subgroup-element first-subgroup-element" value="NoMatter" spanText="No matter"  defaultChecked="checked"/>
								<SubgroupElementRadio name="WheelchairAccessible" className="subgroup-element" value="Yes" spanText="Yes"/>
								<SubgroupElementRadio name="WheelchairAccessible" className="subgroup-element" value="No" spanText="No"/>
							</Subgroup>
						</div>
					</Groupform>

					<Groupform className="group housing-group" classNameHeaderSub="header-sub housing-attr-sub" titleGroup="Housing type">
						<CheckboxList data={housingCheckboxesData}/>
					</Groupform>
					<Groupform titleGroup="Parking" className="group parking-group" classNameHeaderSub="header-sub parking-sub">
						<CheckboxList data={parkingCheckboxesData}/>
					</Groupform>
				</div>	

				<Groupform titleGroup="Laundry" classNameHeaderSub="header-sub laundry-sub">
					<Subgroup className="subgroup no-margin-top">					
						<SubgroupElementRadio className="subgroup-element subgroup-element-laundry  no-margin-top no-margin-left" name="Laundry" value="NoMatter" spanText="No matter"  defaultChecked="checked"/>
						<SubgroupElementRadio className="subgroup-element subgroup-element-laundry  no-margin-top" name="Laundry" value="InUnit" spanText="W/d in unit and  w/d hookups"/>
						<SubgroupElementRadio className="subgroup-element subgroup-element-laundry  no-margin-top" name="Laundry" value="Hookups" spanText="W/d hookups"/>
					</Subgroup>
					<Subgroup className="subgroup no-margin-top">
						<Select name="LaundrySeparation" className="select laundry-select">
							<option value="NoMatter" className="subgroup-select-option">No matter</option>        
							<option value="InBldg" className="subgroup-select-option">Laundry in bldg</option>    
							<option value="OnSite" className="subgroup-select-option">Laundry on site</option>         
							<option value="NoOnSite" className="subgroup-select-option">No laundry on site</option>         
						</Select>               
					</Subgroup>
				</Groupform>
				<div class="hr"></div>
				<Button textBtn="Get price" className="submit-button button" onClick={this.getPrice}/>
				<Button textBtn="Get info" className="get-info-button button" onClick={this.getInfo}/>
			</form>
		)
	}
}

export default Form;

