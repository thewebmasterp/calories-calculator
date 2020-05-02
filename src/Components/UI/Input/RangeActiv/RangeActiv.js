import React, { useState } from 'react';
import './RangeActiv.scss';
import Input from '../Input';

const RangeActiv = (props) => {
    const ratios = [[20, 'bla1'], [20, 'bla2'], [20, 'bla3'], [20, 'bla4'], [20, 'bla5']];
    const [active, changeActive] = useState('one');
    const [guide, changeGuide] = useState(ratios[0][1]);

    const changeHandler = (event) => {
        let caller = event.target;
        if (caller.value < ratios[0][0]) {
            changeActive(() => 'one');
            changeGuide(ratios[0][1]);
        } else if (caller.value <  ratios[0][0]+ratios[1][0]) {
            changeActive(() => 'two');
            changeGuide(ratios[1][1]);
        } else if (caller.value < ratios[0][0]+ratios[1][0]+ratios[2][0]) {
            changeActive(() =>'three');
            changeGuide(ratios[2][1]);
        } else if (caller.value < ratios[0][0]+ratios[1][0]+ratios[2][0]+ratios[3][0]) {
            changeActive(() => 'four');
            changeGuide(ratios[3][1]);
        } else if (caller.value < ratios[0][0]+ratios[1][0]+ratios[2][0]+ratios[3][0]+ratios[4][0]) {
            changeActive(() => 'five');
            changeGuide(ratios[4][1]);
        }
    } 
    return (
        <Input onchange={(a) => changeHandler(a)} type="range" guides={{ //always the sum must be 100
            one: ratios[0][0],
            two: ratios[1][0],
            three: ratios[2][0],
            four: ratios[3][0],
            five: ratios[4][0],
        }} active={active} min="0" max="100" value="0" guide={guide}/>
    )
};

export default RangeActiv;