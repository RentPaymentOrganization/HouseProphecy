import React, { Component } from 'react';
import Form from '../containers/FormAdvanced';
import PriceConatiner from "../components/priceContainer"
import  InfoContainer from "../components/infoContainer"
import {connect} from "react-redux";
import* as actionsApp from "../actions/index";
import Header from "../components/Header";
import LeftBlock from "../components/LeftBlock";

class Advanced extends Component {
    render() {	   
        const onGetPrice=this.props.onGetPrice;   	
        const onGetInfo=this.props.onGetInfo;   	
        const {info, price, fetchingPrice,fetchingInfo} = this.props;           
		return (
            <div className="container clearfix">			
                <LeftBlock className="left-block left-block-advanced" />
                <div className="right-block">
                    <Header/>
                    <Form onGetPrice={onGetPrice} onGetInfo={onGetInfo} info={info}/>
                    <PriceConatiner price={price} fetching={fetchingPrice}/>	   
                    <InfoContainer info={info} fetching={fetchingInfo}/>	
                </div>              	
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

export default connect(mapStateToProps,mapDispatchToProps)(Advanced)