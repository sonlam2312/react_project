import React from 'react';
import NotFound from './components/NotFound';
import ManagerAccount from './components/ManagerAccount';
import Login from './components/Login';

const routes = [
    {
        path : '/notfound',
        exact : false,
        main : () => <NotFound />
    },
    {
        path : '/accounts',
        exact : false,
        main : ({ match, location }) => <ManagerAccount match={match} location={location} />
    },
    {
        path : '/login',
        exact : false,
        main : ({location}) => <Login location={location} />
    }
];

export default routes;