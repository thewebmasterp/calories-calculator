import React from 'react';
import './Button.scss';


const Button = (props) => {
    const click = (event) => {
        if (!props.noRipple) {
            setTimeout(()=>{
                props.click(event);
            },250);
        } else {
            props.click(event);
        }
    }
    return (
        <button style={props.style} onClick={(e) => click(e)} className={` ${props.noRipple ? 'noRipple' : 'ripple light'} ${props.icon ? 'icon' : null}`}>{props.children}</button>
    );
} 

export default Button;
