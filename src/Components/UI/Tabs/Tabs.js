import React from 'react';
import './Tabs.scss';
import { NavLink } from 'react-router-dom';

const Tabs = (props) => {
    return (<>
        <NavLink to="/imperial" className="button" activeStyle={{background: 'red'}} >
            <button>IMPERIAL UNITS</button>
        </NavLink>
        <NavLink to="/metric" className="button" activeStyle={{background: 'red'}} >
            <button>METRIC UNITS</button>
        </NavLink>
    </>)
};

export default Tabs;