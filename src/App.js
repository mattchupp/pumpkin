import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Dashboard from './dashboard'; 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>

        </Switch>
      </Router>
      
      
    </div>
  );
}

export default App;
