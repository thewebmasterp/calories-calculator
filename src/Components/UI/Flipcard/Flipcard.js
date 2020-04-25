import React from 'react';
import './Flipcard.scss';

const flipcard = (props) => {
    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                {props.children}
            </div>
        </div> 
    )
}

export default flipcard;