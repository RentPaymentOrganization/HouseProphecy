import React, { Component } from 'react';
import Halogen from "halogen";

class InfoContainer extends  Component{
    constructor(props){
        super(props);
        this.props=props;
        this.state={
            property:true,
            recommendation:false
        }
        this.setRecommendation=this.setRecommendation.bind(this);
        this.setProperty=this.setProperty.bind(this);
    }
    setRecommendation(e){
        e.preventDefault();
        this.setState({
            property:false,
            recommendation:true
        })
    }

    setProperty(e){
        e.preventDefault();
        this.setState({
            property:true,
            recommendation:false
        })
    }

    render(){

        if (this.props.fetching===true)  {
            let color="#6281c9"
            return (
                <div><Halogen.BeatLoader color={color}/></div>
            )
        }    

        else if (this.props.info)  {
            return (
                <div className="info-container">
            
                <div className="menu-info">
                        <a href="#" className={ this.state.property?"menu-info-link active":"menu-info-link"} onClick={this.setProperty}>Property details</a>
                        <a href="#" className={ this.state.recommendation?"menu-info-link active":"menu-info-link"} onClick={this.setRecommendation}>Recommendation</a>
                </div>
                <div className={this.state.property?"info-contetnt active":"info-contetnt"}>
                        <div className="info-contetnt-container clearfix">
                            <div className="info-contetnt-map">
                                <img src={require('../assets/img/map.jpg')} alt=""/>
                            </div>
                            <div className="info-contetnt-address-block">
                                <div className="info-contetnt-address">                       
                                    <div className="info-contetnt-address-street">622 White horse street</div>                        
                                    <div className="info-contetnt-address-city">Abescon city Atlantic</div>                        
                                </div>
                                <div className="info-contetnt-address-data-blocks clearfix">
                                    <div className="info-contetnt-address-data-block no-margin-left">
                                        <div className="info-contetnt-address-data-block-title">Rentestimate</div>
                                        <div className="info-contetnt-address-data-block-value">$ 3,000</div>
                                    </div>
                                    <div className="info-contetnt-address-data-block">
                                        <div className="info-contetnt-address-data-block-title">Confidence score</div>
                                        <div className="info-contetnt-address-data-block-value">80%</div>
                                    </div>
                                    <div className="info-contetnt-address-data-block">
                                        <div className="info-contetnt-address-data-block-title">Est property vacancy rate</div>
                                        <div className="info-contetnt-address-data-block-value">4,6%</div>
                                    </div>
                                    <div className="info-contetnt-address-data-block">
                                        <div className="info-contetnt-address-data-block-title">District criminality</div>
                                        <div className="info-contetnt-address-data-block-value">30%</div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>  
                        <div className="info-contetnt-container info-contetnt-props-container clearfix">
                            <div className="info-contetnt-props-block info-contetnt-props-block-type">
                                <div className="info-contetnt-props-block-title">Type</div>
                                <div className="info-contetnt-props-block-value">Single-family</div>
                            </div>
                            <div className="info-contetnt-props-block info-contetnt-props-block-year">
                                <div className="info-contetnt-props-block-title">Year built</div>
                                <div className="info-contetnt-props-block-value">Not found</div>
                            </div>
                            <div className="info-contetnt-props-block info-contetnt-props-block-square">
                                <div className="info-contetnt-props-block-title">SQ/FT</div>
                                <div className="info-contetnt-props-block-value">530</div>
                            </div>
                            <div className="info-contetnt-props-block info-contetnt-props-block-beds">
                                <span className="info-contetnt-props-block-title">Beds</span>
                                <span className="info-contetnt-props-block-value">2</span>
                            </div>
                            <div className="info-contetnt-props-block info-contetnt-props-block-baths">
                                <span className="info-contetnt-props-block-title">Baths</span>
                                <span className="info-contetnt-props-block-value">1</span>
                            </div>
                            <div className="info-contetnt-props-block info-contetnt-props-block-radius">
                                <div className="info-contetnt-props-block-title">Radius serched</div>
                                <div className="info-contetnt-props-block-value">2.0 ml</div>
                            </div>
                        </div>
                        <div className="info-contetnt-container info-contetnt-socials">
                            <div className="info-contetnt-socials-title">District ifrastructure</div>
                            <div className="info-contetnt-socials-blocks-container clearfix">
                                <div className="info-contetnt-socials-block">
                                    <div className="info-contetnt-socials-block-title info-contetnt-socials-block-title-schools">Schools</div>
                                        <ul className="info-contetnt-socials-block-list">
                                            <li className="info-contetnt-socials-block-list-li">Ps 77 Lower Lab School</li>
                                            <li className="info-contetnt-socials-block-list-li">The Anderson School</li>
                                            <li className="info-contetnt-socials-block-list-li">Harlem Success Academy
                                            Charter School 4</li>
                                            <li className="info-contetnt-socials-block-list-li">Ps 333 Manhattan School</li>
                                            <li className="info-contetnt-socials-block-list-li">High Tech High School</li>
                                            <li className="info-contetnt-socials-block-list-li">Ps 31 Samuel F Dupont</li>
                                        </ul>
                                        <a href="#" className="info-contetnt-socials-block-link link">View more</a>                        
                                </div>
                                <div className="info-contetnt-socials-block">
                                    <div className="info-contetnt-socials-block-title info-contetnt-socials-block-title-markets">Markets</div>
                                        <ul className="info-contetnt-socials-block-list">
                                            <li className="info-contetnt-socials-block-list-li">Pioneer supermarket</li>
                                            <li className="info-contetnt-socials-block-list-li">Bebeth market</li>
                                            <li className="info-contetnt-socials-block-list-li">Fairway market</li>
                                            <li className="info-contetnt-socials-block-list-li">Ketarilla gourment</li>
                                            <li className="info-contetnt-socials-block-list-li">Royal dely</li>
                                            <li className="info-contetnt-socials-block-list-li">Amish market</li>
                                        </ul>
                                        <a href="#" className="info-contetnt-socials-block-link link">View more</a>
                                </div>
                                <div className="info-contetnt-socials-block">    
                                    <div className="info-contetnt-socials-block-title info-contetnt-socials-block-title-hospital">Hospital</div>
                                    <ul className="info-contetnt-socials-block-list">
                                        <li className="info-contetnt-socials-block-list-li">West dentisty</li>
                                        <li className="info-contetnt-socials-block-list-li">Abc medical</li>
                                        <li className="info-contetnt-socials-block-list-li">Cosmetic dentisty</li>
                                        <li className="info-contetnt-socials-block-list-li">Pediatric ophtalmic consults</li>
                                        <li className="info-contetnt-socials-block-list-li">Professional dental</li>
                                        <li className="info-contetnt-socials-block-list-li">Dermatology</li>
                                    </ul>
                                    <a href="#" className="info-contetnt-socials-block-link link">View more</a>
                                </div>
                                <div className="info-contetnt-socials-block">    
                                    <div className="info-contetnt-socials-block-title info-contetnt-socials-block-title-metro">Metro</div>
                                    <ul className="info-contetnt-socials-block-list">
                                        <li className="info-contetnt-socials-block-list-li">72 st</li>
                                        <li className="info-contetnt-socials-block-list-li">72 st Broadway</li>
                                        <li className="info-contetnt-socials-block-list-li">Museum</li>
                                        <li className="info-contetnt-socials-block-list-li">86 st</li>
                                        <li className="info-contetnt-socials-block-list-li">Subway station</li>                           
                                    </ul>
                                    <a href="#" className="info-contetnt-socials-block-link link">View more</a>
                                </div>
                            </div>     
                        </div> 
                    </div>

                    <div className={ this.state.recommendation?"recommendation-content active":"recommendation-content"}>
                        <div className="recommendation-content-title">Recommendation</div>
                        <div className="recommendation-content-blocks-container">
                            <div className="recommendation-content-blocks-container-row">
                                <div className="recommendation-content-block">
                                    <div className="recommendation-content-block-title recommendation-content-block-title-wall-color">Wall color</div>
                                    <ul className="recommendation-content-block-list">
                                        <li className="recommendation-content-block-list-li clearfix">
                                            <div className="recommendation-content-block-list-li-text">Blue</div>
                                            <div className="recommendation-content-block-list-li-value">fast-rent 65%</div>
                                            <div className="recommendation-content-block-list-li-icon recommendation-content-block-list-li-icon-up"></div>
                                        </li>
                                        <li className="recommendation-content-block-list-li clearfix">
                                            <div className="recommendation-content-block-list-li-text">Grey</div>
                                            <div className="recommendation-content-block-list-li-value">fast-rent 50%</div>
                                            <div className="recommendation-content-block-list-li-icon recommendation-content-block-list-li-icon-up"></div>
                                        </li>
                                        <li className="recommendation-content-block-list-li clearfix">
                                            <div className="recommendation-content-block-list-li-text">Green</div>
                                            <div className="recommendation-content-block-list-li-value">fast-rent 0%</div>
                                            <div className="recommendation-content-block-list-li-icon recommendation-content-block-list-li-none"></div>
                                        </li>
                                        <li className="recommendation-content-block-list-li clearfix">
                                            <div className="recommendation-content-block-list-li-text">Red</div>
                                            <div className="recommendation-content-block-list-li-value">fast-rent -16%</div>
                                            <div className="recommendation-content-block-list-li-icon recommendation-content-block-list-li-down"></div>
                                        </li>
                                        <li className="recommendation-content-block-list-li clearfix">
                                            <div className="recommendation-content-block-list-li-text">Yellow</div>
                                            <div className="recommendation-content-block-list-li-value">fast-rent -30%</div>
                                            <div className="recommendation-content-block-list-li-icon recommendation-content-block-list-li-down"></div>
                                        </li>
                                    </ul>    
                                </div>    
                                <div className="recommendation-content-block">
                                    <div className="recommendation-content-block-title recommendation-content-block-title-pets">Pets</div>
                                    <ul className="recommendation-content-block-list">
                                        <li className="recommendation-content-block-list-li clearfix">
                                            <div className="recommendation-content-block-list-li-text">No matter</div>
                                            <div className="recommendation-content-block-list-li-value">fast-rent 65%</div>
                                            <div className="recommendation-content-block-list-li-icon recommendation-content-block-list-li-icon-up"></div>
                                        </li>
                                        <li className="recommendation-content-block-list-li clearfix">
                                            <div className="recommendation-content-block-list-li-text">Dogs yes</div>
                                            <div className="recommendation-content-block-list-li-value">fast-rent 50%</div>
                                            <div className="recommendation-content-block-list-li-icon recommendation-content-block-list-li-icon-up"></div>
                                        </li>
                                        <li className="recommendation-content-block-list-li clearfix">
                                            <div className="recommendation-content-block-list-li-text">Cats yes</div>
                                            <div className="recommendation-content-block-list-li-value">fast-rent 0%</div>
                                            <div className="recommendation-content-block-list-li-icon recommendation-content-block-list-li-none"></div>
                                        </li>
                                        <li className="recommendation-content-block-list-li clearfix">
                                            <div className="recommendation-content-block-list-li-text">Cats no</div>
                                            <div className="recommendation-content-block-list-li-value">fast-rent -16%</div>
                                            <div className="recommendation-content-block-list-li-icon recommendation-content-block-list-li-down"></div>
                                        </li>
                                        <li className="recommendation-content-block-list-li clearfix">
                                            <div className="recommendation-content-block-list-li-text">Dogs no</div>
                                            <div className="recommendation-content-block-list-li-value">fast-rent -30%</div>
                                            <div className="recommendation-content-block-list-li-icon recommendation-content-block-list-li-down"></div>
                                        </li>
                                    </ul>    
                                </div>   
                                <div className="recommendation-content-block">
                                    <div className="recommendation-content-block-title recommendation-content-block-title-furniture">Furniture</div>
                                    <ul className="recommendation-content-block-list">
                                        <li className="recommendation-content-block-list-li clearfix">
                                            <div className="recommendation-content-block-list-li-text">Full furniture</div>
                                            <div className="recommendation-content-block-list-li-value">+700$</div>
                                            <div className="recommendation-content-block-list-li-icon recommendation-content-block-list-li-icon-up"></div>
                                        </li>
                                        <li className="recommendation-content-block-list-li clearfix">
                                            <div className="recommendation-content-block-list-li-text">Designer furniture</div>
                                            <div className="recommendation-content-block-list-li-value">+500$</div>
                                            <div className="recommendation-content-block-list-li-icon recommendation-content-block-list-li-icon-up"></div>
                                        </li>
                                        <li className="recommendation-content-block-list-li clearfix">
                                            <div className="recommendation-content-block-list-li-text">Built-in furniture</div>
                                            <div className="recommendation-content-block-list-li-value">0$</div>
                                            <div className="recommendation-content-block-list-li-icon recommendation-content-block-list-li-none"></div>
                                        </li>
                                        <li className="recommendation-content-block-list-li clearfix">
                                            <div className="recommendation-content-block-list-li-text">Minimal furniture</div>
                                            <div className="recommendation-content-block-list-li-value">-800$</div>
                                            <div className="recommendation-content-block-list-li-icon recommendation-content-block-list-li-down"></div>
                                        </li>
                                        <li className="recommendation-content-block-list-li clearfix">
                                            <div className="recommendation-content-block-list-li-text">No furniture</div>
                                            <div className="recommendation-content-block-list-li-value">-2000$</div>
                                            <div className="recommendation-content-block-list-li-icon recommendation-content-block-list-li-down"></div>
                                        </li>
                                    </ul>    
                                </div>  
                            </div>
                                <div className="recommendation-content-blocks-container-row">
                                <div className="recommendation-content-block">
                                    <div className="recommendation-content-block-title recommendation-content-block-title-tech">Home technical</div>
                                    <ul className="recommendation-content-block-list">
                                        <li className="recommendation-content-block-list-li clearfix">
                                            <div className="recommendation-content-block-list-li-text">Dishwasher</div>
                                            <div className="recommendation-content-block-list-li-value">+200$</div>
                                            <div className="recommendation-content-block-list-li-icon recommendation-content-block-list-li-icon-up"></div>
                                        </li>
                                        <li className="recommendation-content-block-list-li clearfix">
                                            <div className="recommendation-content-block-list-li-text">Wi-fi</div>
                                            <div className="recommendation-content-block-list-li-value">+40$</div>
                                            <div className="recommendation-content-block-list-li-icon recommendation-content-block-list-li-icon-up"></div>
                                        </li>
                                        <li className="recommendation-content-block-list-li clearfix">
                                            <div className="recommendation-content-block-list-li-text">Tv</div>
                                            <div className="recommendation-content-block-list-li-value">0$</div>
                                            <div className="recommendation-content-block-list-li-icon recommendation-content-block-list-li-none"></div>
                                        </li>
                                        <li className="recommendation-content-block-list-li clearfix">
                                            <div className="recommendation-content-block-list-li-text">No microvave</div>
                                            <div className="recommendation-content-block-list-li-value">-100$</div>
                                            <div className="recommendation-content-block-list-li-icon recommendation-content-block-list-li-down"></div>
                                        </li>
                                        <li className="recommendation-content-block-list-li clearfix">
                                            <div className="recommendation-content-block-list-li-text">No oven</div>
                                            <div className="recommendation-content-block-list-li-value">-250$</div>
                                            <div className="recommendation-content-block-list-li-icon recommendation-content-block-list-li-down"></div>
                                        </li>
                                    </ul>    
                                </div> 
                                <div className="recommendation-content-block">
                                    <div className="recommendation-content-block-title recommendation-content-block-title-parking">Parking</div>
                                    <ul className="recommendation-content-block-list">
                                        <li className="recommendation-content-block-list-li clearfix">
                                            <div className="recommendation-content-block-list-li-text">Valet parking</div>
                                            <div className="recommendation-content-block-list-li-value">+500$</div>
                                            <div className="recommendation-content-block-list-li-icon recommendation-content-block-list-li-icon-up"></div>
                                        </li>
                                        <li className="recommendation-content-block-list-li clearfix">
                                            <div className="recommendation-content-block-list-li-text">Garage</div>
                                            <div className="recommendation-content-block-list-li-value">+300$</div>
                                            <div className="recommendation-content-block-list-li-icon recommendation-content-block-list-li-icon-up"></div>
                                        </li>
                                        <li className="recommendation-content-block-list-li clearfix">
                                            <div className="recommendation-content-block-list-li-text">Carport</div>
                                            <div className="recommendation-content-block-list-li-value">0$</div>
                                            <div className="recommendation-content-block-list-li-icon recommendation-content-block-list-li-none"></div>
                                        </li>
                                        <li className="recommendation-content-block-list-li clearfix">
                                            <div className="recommendation-content-block-list-li-text">Street parking</div>
                                            <div className="recommendation-content-block-list-li-value">-100$</div>
                                            <div className="recommendation-content-block-list-li-icon recommendation-content-block-list-li-down"></div>
                                        </li>
                                        <li className="recommendation-content-block-list-li clearfix">
                                            <div className="recommendation-content-block-list-li-text">No parking</div>
                                            <div className="recommendation-content-block-list-li-value">-600$</div>
                                            <div className="recommendation-content-block-list-li-icon recommendation-content-block-list-li-down"></div>
                                        </li>
                                    </ul>    
                                </div> 
                                <div className="recommendation-content-block">
                                    <div className="recommendation-content-block-title recommendation-content-block-title-parking">Deposit</div>
                                    <ul className="recommendation-content-block-list">
                                        <li className="recommendation-content-block-list-li clearfix">
                                            <div className="recommendation-content-block-list-li-text">500$</div>
                                            <div className="recommendation-content-block-list-li-value">fast rent +60%</div>
                                            <div className="recommendation-content-block-list-li-icon recommendation-content-block-list-li-icon-up"></div>
                                        </li>
                                        <li className="recommendation-content-block-list-li clearfix">
                                            <div className="recommendation-content-block-list-li-text">$1000</div>
                                            <div className="recommendation-content-block-list-li-value">fast rent +40%</div>
                                            <div className="recommendation-content-block-list-li-icon recommendation-content-block-list-li-icon-up"></div>
                                        </li>
                                        <li className="recommendation-content-block-list-li clearfix">
                                            <div className="recommendation-content-block-list-li-text">$1500</div>
                                            <div className="recommendation-content-block-list-li-value">fast rent 0%</div>
                                            <div className="recommendation-content-block-list-li-icon recommendation-content-block-list-li-none"></div>
                                        </li>
                                        <li className="recommendation-content-block-list-li clearfix">
                                            <div className="recommendation-content-block-list-li-text">$2000</div>
                                            <div className="recommendation-content-block-list-li-value">fast rent -20%</div>
                                            <div className="recommendation-content-block-list-li-icon recommendation-content-block-list-li-down"></div>
                                        </li>
                                        <li className="recommendation-content-block-list-li clearfix">
                                            <div className="recommendation-content-block-list-li-text">$3000</div>
                                            <div className="recommendation-content-block-list-li-value">fast rent -37%</div>
                                            <div className="recommendation-content-block-list-li-icon recommendation-content-block-list-li-down"></div>
                                        </li>
                                    </ul>    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>       
            );
        }
        else{
            return null;
        }
    }
}

export default InfoContainer;