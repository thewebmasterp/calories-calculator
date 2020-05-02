import React from 'react';
import './Field.scss';

const field = (props) => {

    return (
        <div className={`Field ${props.whole?'whole':''}`} >
            {(props.label && !props.whole) ? 
                <div className="label" >{props.label}</div> : null
            }
            <div className={`content ${props.end ? 'end' : null}`}>
                {props.children}
            </div>
        </div>
    );
}

export default field;