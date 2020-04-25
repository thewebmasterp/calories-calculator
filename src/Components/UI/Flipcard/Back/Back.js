import React from 'react';
import './Back.scss';

const back = (props) => {
    return (
        <div className="Back">
            {props.children}
        </div>
    )
};

export default back;