import React, { useState, useEffect } from 'react';
import './Input.scss';
import { BsConeStriped } from 'react-icons/bs';

const TextInput = (props) => {
    let input;
    const [labelState, changeLabelState] = useState('0');
    let value = ''; //the value of the text input

    const changeHandler = (event, focus) => {
        value = event.target.value;
        // props.change(event);
        if (value.length === 0 || Number(value) === 0) {
            changeLabelState(0);
        } else if (value.length > 0 && Number(value) !== 0) {
            if (event.target.elemento) {
                let el = event.target.elemento.getElementsByTagName('p')[0];
                el.style.opacity = 1;
            } else {
                changeLabelState(1);
            }
        }
    }

    useEffect( () => {
        const inputs = document.querySelectorAll('[data-trigger=true][data-triggered=false]');
        inputs.forEach((el) => {
            el.setAttribute('data-triggered', true);
            changeHandler({
                target: {
                    value: el.getElementsByTagName('input')[0].value,
                    elemento: el
                }
            });
        });
    } );

    switch(props.type) {
        case 'number':

            input = (
                <div    data-trigger={props.trigger}
                        data-triggered={false}
                        className="wrap" 
                        style={props.style} 
                        onFocus={(e) => changeLabelState(1) } 
                        onBlur={(e) => changeHandler(e)}
                        onChange={(e) => changeHandler(e)} 
                        onLoad={(e) => console.log('try')} >
                    <p className="currency" 
                        style={{'opacity': labelState}}>{props.guide}</p>
                    <input defaultValue={props.def} value={props.val} onChange={props.change} type="number"/>
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
                    }} data-active={(arr[i][0] === props.active) ? 'active' : ''} ><span /></div>);
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
                    <p className="currency dynamic">{props.guide}</p>
                    {readyBacks ? readyBacks : null}
                    <input type="range" style={props.style} onChange={props.onchange} defaultValue={props.value} min={props.min} max={props.max} className={props.customThumb ? 'customThumb' : null}/>
                </div>);



            break;
        case 'radio':
            input = (<>
                <input type="radio" name={props.name} id={props.id} style={props.style} onChange={props.change} checked={props.checked} />
                    <label htmlFor={props.id}>{props.guide}</label>
            </>);
            break;
        default:
            input = <input {...props} />;  
    }
    
    return input;
}

export default TextInput;