import React from 'react';
import './BackCard.scss';

const BackCard = (props) => {
    return (
        <div className="Back" style={{
            height: "500px" 
        }}>
            {props.children}
        </div>
    )
};

export default BackCard;