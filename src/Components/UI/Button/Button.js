import React from 'react';
import './Button.scss';


const Button = (props) => {
    return (
        <button style={props.style} onClick={props.click} className={` ${props.noRipple ? 'noRipple' : 'ripple light'} ${props.icon ? 'icon' : null}`}>{props.children}</button>
    );
} 

export default Button;
