import React from 'react';
import './Input.scss';

const textInput = (props) => {
    let input;
    // eslint-disable-next-line default-case
    switch(props.type) {
        case 'number':
            input = (
                <div className="wrap" style={props.style}>
                    <p>{props.guide}</p>
                    <input type="number"/>
                </div>);
            break;
        case 'range':
            input = (
                <div className="wrap">
                    <p>{props.guide}</p>
                    <input type="range" style={props.style} />
                </div>);
            break;
        case 'radio':
            input = (<>
                <input type="radio" name={props.name} id={props.id} style={props.style}/>
                    <label htmlFor={props.id}>{props.guide}</label>
            </>);
            break;
        default:
            input = <input {...props} />;  
    }
    
    return input;
}

export default textInput;