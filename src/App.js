import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Dashboard from './pages/dashboard'; 
import NewTicket from './pages/newticket';
import Success from './pages/success';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/new-ticket">
            <NewTicket />
          </Route>
          <Router exact path="/success">
            <Success />
          </Router>

        </Switch>
      </Router>
      
      
    </div>
  );
}

export default App;
