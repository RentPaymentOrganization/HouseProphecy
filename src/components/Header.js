import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="header-back"></div>
                <div className="header-maps">Maps</div>
                <div className="header-search">
                    <span className="header-search-text">Search</span>
                    <span className="header-search-icon"></span>
                </div>
                <div className="header-sign-in">Sign In</div>
                <div className="header-menu-icon"></div>                
            </div>
        );
    }
}

export default Header;