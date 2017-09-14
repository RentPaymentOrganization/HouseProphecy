import React from 'react';

const InfoContainer = (props) => {
  
    return (
        <div className="price-container">
           {(props.fetching===true)?"Loading...":props.info}
        </div>
    );
};

export default InfoContainer;