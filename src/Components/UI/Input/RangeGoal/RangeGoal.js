import React, { useState } from 'react';
import Input from '../Input';
import './RangeGoal.scss';

const RangeGoal = (props) => {
    const ratios = [66, 17, 17];
    const [thumbPos, changeThumbPos] = useState(0);
    const [thumbWidth, changeThumbWidth] = useState(2);
    const [active, changeActive] = useState('one');
    const [overlayTransitionDuration, changeOTD] = useState(0);

    const changeHandler = (event) => {
        let caller = event.target;
        changeThumbWidth(() => caller.value*0.65)
        if (caller.value < ratios[0] / 2) {
            changeActive(() => 'one');
            changeThumbPos(() => caller.value * 2);
            changeOTD(0);
        } else if (caller.value <  ratios[0] / 2 + ratios[1] / 2) {
            changeActive(() => 'two');
            changeThumbPos(() => 72);
            changeOTD(180);
        } else if (caller.value <  ratios[0] / 2 + ratios[1] / 2 + ratios[2] / 2) {
            changeActive(() => 'three');
            changeThumbPos(() => 89);
            changeOTD(180);
        }
    }

    return (
        <>          
            {/* <div className="overlay2" style={{left: `${this.state.thumbPos}px`}} /> */}
            <div className="overlay" style={{
                left: `${thumbPos}%`,
                transitionDuration: `${overlayTransitionDuration}ms`
            }} />
            <Input onchange={(a) => changeHandler(a)} type="range" guides={{ //always the sum must be 100
                one: ratios[0],
                two: ratios[1],
                three: ratios[2],
            }} active={active} min="0" max="50" value="0" customThumb='true'/>
            <style dangerouslySetInnerHTML={{__html: `
                input.customThumb::-webkit-slider-thumb { width: ${thumbWidth}% !important; }
            `}} />
        </>
    )    
   
}

export default RangeGoal;