import React from 'react';
import './Field.scss';

const field = (props) => {

    return (
        <div className={`Field ${props.whole?'whole':''} ${props.auto?'auto':''}`}>
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


 //style={{...props.style, height: props.auto ? 'auto' : ''}}
 //style={{height: props.auto ? 'auto' : ''}}