import React from 'react';
import './FrontCard.scss'

const FrontCard = (props) => {
    return (
        <div className="Front">
            {props.children}
        </div>
    )
};

export default FrontCard;