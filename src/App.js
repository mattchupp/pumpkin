import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Dashboard from './pages/Dashboard'; 
import NewTicket from './pages/Newticket';
import Success from './pages/Success';
import Profile from './components/Profile';
import {
  Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import { useAuth0 } from "./react-auth0-spa";
import history from "./utils/history";
import PrivateRoute from './components/PrivateRoute';


function App() {
  
  // const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }


  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route exact path="/">
            
          </Route>
          

          <PrivateRoute exact path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          
          {/* 
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          */}
          <Route exact path="/new-ticket">
            <NewTicket />
          </Route>
          <Route exact path="/success">
            <Success />
          </Route>
          <PrivateRoute path="/profile" component={Profile} />

        </Switch>
      </Router>
      
    {/*
      {!isAuthenticated && (
            <button onClick={() => loginWithRedirect({})}>Log in</button>
            )}

            {isAuthenticated && <button onClick={() => logout()}>Log out</button>} 
    */ }
      
    </div>
  );
}

export default App;
