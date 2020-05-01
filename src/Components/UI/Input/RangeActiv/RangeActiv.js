import React, { useState } from 'react';
import './RangeActiv.scss';
import Input from '../Input';

const RangeActiv = (props) => {
    const ratios = [20, 20, 20, 20, 20]
    const [active, changeActive] = useState('one');

    const changeHandler = (event) => {
        let caller = event.target;
        if (caller.value < ratios[0]) {
            changeActive(() => 'one');
        } else if (caller.value <  ratios[0]+ratios[1]) {
            changeActive(() => 'two');
        } else if (caller.value < ratios[0]+ratios[1]+ratios[2]) {
            changeActive(() =>'three');
        } else if (caller.value < ratios[0]+ratios[1]+ratios[2]+ratios[3]) {
            changeActive(() => 'four');
        } else if (caller.value < ratios[0]+ratios[1]+ratios[2]+ratios[3]+ratios[4]) {
            changeActive(() => 'five');
        }
    } 
    return (
        <Input onchange={(a) => changeHandler(a)} type="range" guides={{ //always the sum must be 100
            one: ratios[0],
            two: ratios[1],
            three: ratios[2],
            four: ratios[3],
            five: ratios[4],
        }} active={active} min="0" max="100" value="0"/>
    )
};

export default RangeActiv;