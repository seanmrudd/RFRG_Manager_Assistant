import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Wrapper from './components/Wrapper';
import './App.css';
import LandingPage from './pages/LandingPage';
// import MainMenu from './pages/MainMenu';
import Calendar from './pages/Calendar';
import Caterings from './pages/Caterings';
import Contacts from './pages/Contacts';
import Managers from './pages/Managers';
import MessageBoard from './pages/MessageBoard';
import RepairAndMaintenance from './pages/RepairAndMaintenance';
import RFRGInfo from './pages/RFRGInfo';
import Stores from './pages/Stores';
import ToDoList from './pages/ToDoList';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Wrapper>
            <Route exact path='/' component={LandingPage} />
            <Route path='/calendar' component={Calendar} />
            <Route path='/caterings' component={Caterings} />
            <Route path='/contacts' component={Contacts} />
            <Route path='/managers' component={Managers} />
            <Route path='/messageboard' component={MessageBoard} />
            <Route path='/repairandmaintenance' component={RepairAndMaintenance} />
            <Route path='/rfrginfo' component={RFRGInfo} />
            <Route path='/stores' component={Stores} />
            <Route path='/todolist' component={ToDoList} />
          </Wrapper>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
