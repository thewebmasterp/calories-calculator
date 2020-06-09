import React, { useState } from 'react';
import './Calculator.scss';
import defaults from '../../defaults/defaults.scss';
import { connect } from 'react-redux';

import FlipCard from '../../Components/UI/Flipcard/Flipcard';

import Front from '../../Containers/Calculator/Front/Front';
import Back from '../../Containers/Calculator/Back/Back';

const Calculator = (props) => {
    const [flipCardDeg, changeFCDeg] = useState(0);

    return (
        <>
            <FlipCard flip = {flipCardDeg}>
                <Front redux={ props } defs = {defaults} flip={(deg) => {changeFCDeg(deg)}} />
                <Back redux={ props } defs = {defaults} flip={(deg) => {changeFCDeg(deg)}}/>
            </FlipCard>
        </>
    );
} 

const mapStateToProps = state => {
    return {
        read: state 
    }
}

const mapDispatchToProps = dispatch => {
    return {
        write: {
            setAge: (age) => dispatch({ type: 'SET_AGE', payload: age }),
            setGender: (gender) => dispatch({ type: 'SET_GENDER', payload: gender }),
            setActivity: (percent) => dispatch({ type: 'SET_ACTIVITY', payload: percent }),
            setGoal: (percent) => dispatch({ type: 'SET_GOAL', payload: percent }),
            setMunitHeight: (centimeters) => dispatch({ type: 'SET_M_UNIT_HEIGHT', payload: centimeters }),
            setMunitWeight: (kilograms) => dispatch({ type: 'SET_M_UNIT_WEIGHT', payload: kilograms }),
            // setIunitHeight: (feet, inches) => dispatch({ type: 'SET_I_UNIT_HEIGHT', payload: {feet: feet, inches: inches} }),
            // setIunitHeightFeet: (feet) => dispatch({type: 'SET_I_UNIT_HEIGHT_FEET', payload: feet}),
            setIunitHeight: (inches) => dispatch({type: 'SET_I_UNIT_HEIGHT', payload: inches}),
            setIunitWeight: (pounds) => dispatch({ type: 'SET_I_UNIT_WEIGHT', payload: pounds }),
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);


