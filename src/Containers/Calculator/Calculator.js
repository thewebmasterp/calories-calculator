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
                <Front defs = {defaults} flip={(deg) => {changeFCDeg(deg)}} />
                <Back defs = {defaults} flip={(deg) => {changeFCDeg(deg)}}/>
            </FlipCard>
        </>
    );
} 

const mapStateToProps = state => {
    return {
        ctr: state.counter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: 'INCREMENT'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);


