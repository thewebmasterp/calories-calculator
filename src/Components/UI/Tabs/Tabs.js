import React from 'react';
import './Tabs.scss';
import { NavLink } from 'react-router-dom';

const Tabs = (props) => {
    return (<>
        <NavLink to="/imperial" className="button" activeClassName="active" isActive={(match, no) => {
            if (!match) {
                if (no && no.pathname === '/' && props.active === 'I') {
                    return true;
                }
                return false;
            } else return true;
        }}>
            <button>IMPERIAL UNITS</button>
        </NavLink>
        <NavLink to="/metric" className="button" activeClassName="active" isActive={(match, no) => {
            if (!match) {
                if (no && no.pathname === '/' && props.active === 'M') {
                    return true;
                }
                return false;
            } else return true;
        }}>
            <button>METRIC UNITS</button>
        </NavLink>
    </>);
};

export default Tabs;