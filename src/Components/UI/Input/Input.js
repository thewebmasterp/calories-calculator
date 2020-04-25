import React from 'react';
import './Input.scss';

const textInput = (props) => {
    let input;
    // eslint-disable-next-line default-case
    switch(props.type) {
        case 'number':
            input = (<>
                <p>asd</p>
                <input type="number" />
            </>);
            break;
        case 'range':
            input = (<>
                <p></p>
                <input type="range" />
            </>);
            break;
        case 'radio':
            input = (<>
                <input type="range" />
            </>);
            break;
        default:
            input = <input {...props} />;  
    }
    return input;
}

export default textInput;