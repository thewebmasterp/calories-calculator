import React from 'react';
import './Flipcard.scss';

const flipcard = (props) => {
    return (
        <div class="flip-card">
            <div class="flip-card-inner">
                {props.children}
            </div>
        </div> 
    )
}

export default flipcard;