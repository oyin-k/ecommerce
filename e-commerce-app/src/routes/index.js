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
        </main>
        <footer className="footer">
          <p className="footer__caption">
            Built by Oyinkan. This is an attempt to replicate{' '}
            <a href="https://ecommerce-netlify.netlify.app/">
              Sarah Drasner's Ecommerce work
            </a>{' '}
            using React. You can reach me on{' '}
            <a
              className="footer__profile-link"
              href="https://twitter.com/oynkdsgn1"
            >
              Twitter
            </a>{' '}
            or check me out on{' '}
            <a
              className="footer__profile-link"
              href="https://github.com/oyin-k"
            >
              Github
            </a>
            .
          </p>
        </footer>
      </div>
    </BrowserRouter>
  );
};

export default Routes;
