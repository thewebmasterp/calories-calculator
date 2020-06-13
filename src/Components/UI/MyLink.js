import React from 'react';
import {Route, NavLink as ReactRouterLink} from 'react-router-dom';
import {createPath} from 'history';

const MyLink = ({to, replace, ...props}) => (
    <Route path={typeof to === 'string' ? to : createPath(to)} exact>
        {({match}) => (
            <ReactRouterLink {...props} to={to} replace={replace || !!match} />
        )}
    </Route>
);

MyLink.propTypes = ReactRouterLink.propTypes;
MyLink.defaultProps = ReactRouterLink.defaultProps;

export default MyLink;
