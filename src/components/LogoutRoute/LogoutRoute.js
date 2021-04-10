import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../../App';

const LogoutRoute = ({children, ...rest}) => {
    let {user} = useContext(UserContext);
    return (
        <Route
        {...rest}
        render={
            ({location})=>!user?.email?(children):(
            <Redirect
            to={{
                pathname:'/',
                state:{from:location}
            }}
            />)
        }
        />
    );
};

export default LogoutRoute;