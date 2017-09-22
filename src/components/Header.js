import React from 'react';
import { browserHistory } from 'react-router'

function Header (props) {
    
    const back=(props.location && props.location.pathname==="/")?false:true;
    console.log(back);
    return (
        <div className="header">
            <div className={back?"header-back":""}  onClick={browserHistory.goBack}></div>
            <div className={back?"header-maps":"header-maps-index"}>Maps</div>
            <div className={back?"header-search":"header-search-index"}>
                <span className="header-search-text">Search</span>
                <span className="header-search-icon"></span>
            </div>
            <div className="header-sign-in">Sign In</div>
            <div className="header-menu-icon"></div>                
        </div>
    );
    
}

export default Header;