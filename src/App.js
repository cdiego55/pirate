import React from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import {Container} from 'semantic-ui-react';
import './App.css';

import Store from './pages/Store';
import Cart from './pages/Cart';

function App() {
  // These are the paths to the website pages.
  // If any path is inserted, user will be redirected to the store
  // page and they can access their cart from there.
  return (
    <Router>
      <Container>
        <Route exact path="/" component={Store}/>
        <Route exact path="/Cart" component={Cart}/>
        {(window.location.pathname !== "/" && window.location.pathname !== "/Cart") &&
        <Redirect from="*" to="/"/>
        }
      </Container>
    </Router>
  );
}

export default App;