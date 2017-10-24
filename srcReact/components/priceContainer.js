import React from 'react';

const PriceContainer = (props) => {
  
    return (
        <div className="price-container">
           {(props.fetching===true)?"Loading...":props.price}
        </div>
    );
};

export default PriceContainer;