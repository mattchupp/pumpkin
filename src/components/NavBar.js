// import Link from 'next/link';
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from "../react-auth0-spa";
// import history from "./utils/history";
// import PrivateRoute from './components/PrivateRoute';


export default function NavBar(props) {
  const name = {
    'color': 'white'
  }

  // check if authenticated
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
  //  const { loading } = useAuth0();
  // console.log(user.name)


  return (
    
    <nav className="navbar bg-dark navbar-dark">
      <Link to="/dashboard"><span className="navbar-brand">Pumpkin</span></Link>
      <div>
        <ul className="navbar-nav">   
          <li className="nav-item" style={name}>{ /* user.name */}</li>
          <li className="nav-item">
            {!isAuthenticated && (
            <button onClick={() => loginWithRedirect({})}>Log in</button>
            )}

            {isAuthenticated && <button onClick={() => logout()}>Log out</button>} 
          </li>
                   
        </ul>
      </div>
    </nav>
  )
}



/*
<nav className="navbar bg-dark navbar-dark">
      <Link href="/"><a className="navbar-brand">Pumpkin</a></Link>
      <div className="d-flex justify-content-end" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              id="userDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {props.user}
            </a>

            <div className="dropdown-menu" aria-labelledby="userDropdown">
              <Link href="/api/logout"><a>Sign Out</a></Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>

*/