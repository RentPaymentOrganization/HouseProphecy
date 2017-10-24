import React from 'react';
import { Link } from 'react-router';

const LeftBlock = (props) => {
    return (
        <div className={props.className}>
            <Link to="/" className="logo-link"></Link>           
        </div>
    );
};

export default LeftBlock;