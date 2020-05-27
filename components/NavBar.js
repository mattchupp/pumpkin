import Link from 'next/link';

export default function NavBar(props) {
  return (
    <nav className="navbar bg-dark navbar-dark">
      <Link href="/"><a className="navbar-brand">Pumpkin</a></Link>
      <div className="d-flex justify-content-end" id="navbarNavDropdown">
        <ul className="navbar-nav">   
          <li className="nav-item nav-link">{props.user}</li>
          <li className="nav-item">
            <Link href="/api/logout"><a className="nav-link">Sign Out</a></Link>
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