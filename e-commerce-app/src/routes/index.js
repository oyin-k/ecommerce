import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import { withLayout } from '../components/container/Container';
import Nav from '../components/Nav';
import LandingPage from '../content/LandingPage/LandingPage';
import Women from '../content/Women';
import Men from '../content/Men';

const Routes = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <header>
          <h1 className="site-logo">Japa Market</h1>
          <Nav></Nav>
        </header>
        <main className="content">
          <Switch>
            <Route path="/women" component={withLayout(Women)} />
            <Route path="/men" component={withLayout(Men)} />
            <Route exact path="/" component={withLayout(LandingPage)} />
          </Switch>
          <div className="banner"></div>
        </main>
        <footer className="footer"></footer>
      </div>
    </BrowserRouter>
  );
};

export default Routes;
