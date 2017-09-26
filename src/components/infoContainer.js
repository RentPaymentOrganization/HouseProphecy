import React from 'react';

const InfoContainer = (props) => {
  
    return (
        <div className="info-container">
           {(props.fetching===true)?"Loading...":props.info}
           <div className="menu-info">
                <a href="#" className="menu-info-link active">Property details</a>
                <a href="#" className="menu-info-link">Recommendation</a>
           </div>
           <div className="info-contetnt">
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
        </div>       
    );
};

export default InfoContainer;