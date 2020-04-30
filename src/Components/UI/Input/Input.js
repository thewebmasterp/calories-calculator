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


            let readyBacks;
            if ( !!Object.values(props.guides).length && Object.values(props.guides).reduce((a, b) => a + b) === 100 ) {
                let backs = [];
                let arr = Object.entries(props.guides);
                for (let i = 0; i <= arr.length-1; i++) {
                    backs.push( <div key={arr[i][0]} className="back" style={{
                        width: `${arr[i][1]}%`,
                        background: (arr[i][0] === props.active) ? 'pink' : 'orange',
                        // position: 'absolute',
                        // zIndex: ''
                    }}/> )
                }
                readyBacks = (<div className="backs" style={{
                    position: 'relative',
                    // zIndex: '0' 
                }}>
                    {backs.map(el => el)}
                </div>);
            }
            input = (
                <div className="wrap">
                    {readyBacks ? readyBacks : null}
                    <p>{props.guide}</p>
                    <input type="range" style={props.style} onChange={props.onchange} defaultValue={props.value} min={props.min} max={props.max} className={props.customThumb ? 'customThumb' : null}/>
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