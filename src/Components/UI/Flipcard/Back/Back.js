import React from 'react';
import './Back.scss';

const back = (props) => {
    return (
        <div className="Back" style={{
            height: "500px" 
        }}>
            {props.children}
        </div>
    )
};

export default back;