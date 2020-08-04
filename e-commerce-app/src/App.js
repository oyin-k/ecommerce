import React from 'react';

// import Routes from './routes';
import { withLayout } from './components/container';
import Nav from './components/Nav';
import { Route, HashRouter } from 'react-router-dom';

import LandingPage from './content/LandingPage';
import Women from './content/Women';
import Men from './content/Men';

const App = () => {
  return (
    <HashRouter>
      <div className="App">
        <h1 className="logo">Japa Market</h1>
        <Nav></Nav>
        <div className="nav-content">
          <Route exact path="/" component={withLayout(LandingPage)} />
          <Route path="/women" component={withLayout(Women)} />
          <Route path="/men" component={withLayout(Men)} />
        </div>
      </div>
    </HashRouter>
  );
};

export default App;
