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
import { useAuth0 } from "./react-auth0-spa";


function App() {
  
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }


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
      
      {!isAuthenticated && (
        <button onClick={() => loginWithRedirect({})}>Log in</button>
      )}

      {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
      
    </div>
  );
}

export default App;
