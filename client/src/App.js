import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Wrapper from './components/Wrapper';
import './App.css';
import LandingPage from './pages/LandingPage';
import MainMenu from './pages/MainMenu';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Wrapper>
            <Route exact path='/' component={LandingPage} />
            <Route path='/menu' component={MainMenu} />
          </Wrapper>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
