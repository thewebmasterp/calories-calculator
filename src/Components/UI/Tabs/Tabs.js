import React, { useState } from 'react';
import './Tabs.scss';
import { NavLink } from 'react-router-dom';
import MyLink from '../../UI/MyLink';
const Tabs = (props) => {

    console.log('BRR')
    return (
        <>
            <MyLink    to={props.redux.routeReducer.currentMasterRoute+"/imperial"+props.redux.routeReducer.currentSettingsRoute} 
                        className="button imperial"
                        >
                <button onClick={() => {props.redux.setUnits('/imperial')}}>IMPERIAL UNITS</button>
            </MyLink>
            <MyLink   to={props.redux.routeReducer.currentMasterRoute+"/metric"+props.redux.routeReducer.currentSettingsRoute} 
                        className="button metric"
                        >
                    
                <button onClick={() => {props.redux.setUnits('/metric')}}>METRIC UNITS</button>
            </MyLink>
        </>
    )
};

export default Tabs;