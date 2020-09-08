import React from 'react';
import './App.css';
import Registr from './components/Registr/Registr';
import {Switch, Route} from 'react-router-dom';
import List from './components/List/List';
import ChangeData from './components/ChangeData/ChangeData'

function App() {
  return (
    <Switch>
    <Route path="/" component={Registr} exact/>
    <Route path="/list" component={List}/>
    <Route path="/changedata/:id" component={ChangeData}/>
    <Route render={() => <h1 style={{color: "red", textAlign: "center"}}>404: Page Not Found</h1>}/>
    </Switch>
    
  );
}

export default App;
