import React, { Component } from 'react';
import Form from '../components/Form';
import PriceConatiner from "../components/priceContainer"
import  InfoContainer from "../components/infoContainer"
import {connect} from "react-redux";
import* as actionsApp from "../actions/index";

class Wrap extends Component {
    render() {	   
        const onGetPrice=this.props.onGetPrice;   	
        const onGetInfo=this.props.onGetInfo;   	
        const {info, price, fetchingPrice,fetchingInfo} = this.props;           
		return (
			<div className="container">			
                <Form onGetPrice={onGetPrice} onGetInfo={onGetInfo} info={info}/>
                <PriceConatiner price={price} fetching={fetchingPrice}/>	   
                <InfoContainer info={info} fetching={fetchingInfo}/>	              	
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
        price: state.priceReducer.price,
        info:state.infoReducer.info,
        fetchingPrice:state.priceReducer.fetching,
        fetchingInfo:state.infoReducer.fetching,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
        onGetPrice: () => {
            dispatch(actionsApp.getPrice());
        },

        onGetInfo: () => {
            dispatch(actionsApp.getInfo());
        }

       
     
	}

}

export default connect(mapStateToProps,mapDispatchToProps)(Wrap)