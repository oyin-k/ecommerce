import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { withLayout } from '../components/container/Container';
import LandingPage from '../content/LandingPage';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route 
                    path="/"
                    component={withLayout(LandingPage)} 
                />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
