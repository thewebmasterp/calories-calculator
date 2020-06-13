import React, { useState } from 'react';
import './Calculator.scss';
import defaults from '../../defaults/defaults.scss';
import { connect } from 'react-redux';

import FlipCard from '../../Components/UI/Flipcard/Flipcard';

import Front from '../../Containers/Calculator/Front/Front';
import Back from '../../Containers/Calculator/Back/Back';
import { Route, Switch, Redirect } from 'react-router';

const Calculator = (props) => {
    const [flipCardDeg, changeFCDeg] = useState(0);

    console.log(props)
    return (
        <>
            <FlipCard flip={ flipCardDeg }>
                <Switch flip={ flipCardDeg}>
                    <Route 
                        path={ "/front" } 
                        render={ ()=>{
                            return <Front 
                                        degree={flipCardDeg}
                                        redux={ props } 
                                        defs={ defaults }
                                        flip={ (deg)=>{
                                            if (deg || deg===0) {
                                                changeFCDeg(deg);
                                                console.log(`1: changeFCDeg(${deg})`)
                                            } else {
                                                changeFCDeg(180);
                                                console.log(`1: changeFCDeg(180)`)
                                            }
                                        } }
                                        render={ ()=>{
                                            return <Back 
                                                        redux={ props } 
                                                        defs = { defaults } 
                                                    />; //end Back 
                                        } }
                                    />; //end Front render 
                        } } //end Route render 
                    />
                    <Route 
                        path={ "/back" } 
                        render={() => {
                            return <Front 
                                        degree={flipCardDeg}
                                        redux={ props } 
                                        defs={ defaults } 
                                        flip={ (deg)=>{
                                            if (deg || deg===0) {
                                                changeFCDeg(180);
                                                console.log(`3: changeFCDeg(180)`)
                                            } else {
                                                changeFCDeg(180);
                                                console.log(`3: changeFCDeg(180)`)
                                                props.history.push('/back');
                                            }
                                        } }
                                        render={ ()=>{
                                            return <Back 
                                                        redux={ props } 
                                                        defs = { defaults } 
                                                    />; //end Back 
                                        } }
                                    />; //end Front render 
                        } } //end Route render 
                    />
                    
                    
                    <Redirect from="/" to={props.routeReducer.currentMasterRoute}/>
                </Switch>
            </FlipCard>
        </>
    );
} 

const mapStateToProps = state => {
    return {
        ...state 
    }
}

const mapDispatchToProps = dispatch => {
    return {
        /* reducer.js */
        setAge: (age) => dispatch({ type: 'SET_AGE', payload: age }),
        setGender: (gender) => dispatch({ type: 'SET_GENDER', payload: gender }),
        setActivity: (percent) => dispatch({ type: 'SET_ACTIVITY', payload: percent }),
        setGoal: (percent) => dispatch({ type: 'SET_GOAL', payload: percent }),
        setMunitHeight: (centimeters) => dispatch({ type: 'SET_M_UNIT_HEIGHT', payload: centimeters }),
        setMunitWeight: (kilograms) => dispatch({ type: 'SET_M_UNIT_WEIGHT', payload: kilograms }),
        setIunitHeight: (inches) => dispatch({type: 'SET_I_UNIT_HEIGHT', payload: inches}),
        setIunitWeight: (pounds) => dispatch({ type: 'SET_I_UNIT_WEIGHT', payload: pounds }),
        /* routeReducer.js */
        setUnits: (route) => dispatch({type: 'SET_UNITS', payload: route}),
        setSettings: (route) => dispatch({type: 'SET_SETTINGS', payload: route}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);


