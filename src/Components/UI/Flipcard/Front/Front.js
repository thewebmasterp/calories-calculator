import React from 'react';
import './Front.scss'

const front = (props) => {
    return (
        <div className="Front">
            {props.children}
        </div>
    )
};

export default front;