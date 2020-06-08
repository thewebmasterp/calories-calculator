import React, { useState } from 'react';
import Input from '../Input';
import './RangeGoal.scss';

const RangeGoal = (props) => {
    const ratios = [[66, 'bla1'], [17, 'bla2'], [17, 'bla3']];
    const [thumbPos, changeThumbPos] = useState(0);
    const [thumbWidth, changeThumbWidth] = useState(2);
    const [active, changeActive] = useState('one');
    const [overlayTransitionDuration, changeOTD] = useState(0);
    const [guide, changeGuide] = useState(ratios[0][1]);

    const changeHandler = (event) => {
        let caller = event.target;
        changeThumbWidth(() => caller.value*0.65)
        if (caller.value < ratios[0][0] / 2) {
            changeActive(() => 'one');
            changeThumbPos(() => caller.value * 2);
            changeOTD(0);
            changeGuide(ratios[0][1]);
        } else if (caller.value <  ratios[0][0] / 2 + ratios[1][0] / 2) {
            changeActive(() => 'two');
            changeThumbPos(() => 72);
            changeOTD(180);
            changeGuide(ratios[1][1]);
        } else if (caller.value <  ratios[0][0] / 2 + ratios[1][0] / 2 + ratios[2][0] / 2) {
            changeActive(() => 'three');
            changeThumbPos(() => 89);
            changeOTD(180);
            changeGuide(ratios[2][1]);
        }
        props.change(event);
    }

    return (
        <>          
            {/* <div className="overlay2" style={{left: `${this.state.thumbPos}px`}} /> */}
            <div className="overlay" style={{
                left: `${thumbPos}%`,
                transitionDuration: `${overlayTransitionDuration}ms`
            }} />
            <Input onchange={(e) => changeHandler(e)} type="range" guides={{ //always the sum must be 100
                one: ratios[0][0],
                two: ratios[1][0],
                three: ratios[2][0],
            }} active={active} min="0" max="50" value="0" customThumb='true' guide={guide}/>
            <style dangerouslySetInnerHTML={{__html: `
                input.customThumb::-webkit-slider-thumb { width: ${thumbWidth}% !important; }
            `}} />
        </>
    )    
   
}

export default RangeGoal;