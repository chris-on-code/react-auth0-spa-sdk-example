import React from 'react';
import { useAuth0 } from '../contexts/auth0-context';
import { Link } from 'react-router-dom';

export default function Header() {
  const { isLoading, user, loginWithRedirect, logout } = useAuth0();

  return (
    <header>
      <nav className="navbar is-dark">
        <div className="container">
          <div className="navbar-menu">
            {/* logo */}
            <div className="navbar-brand">
              <Link to="/" className="navbar-item">
                My Cool App!
              </Link>
            </div>

            {/* menu items */}
            <div className="navbar-end">
              {/* link to about page */}
              <Link to="/about" className="navbar-item">
                About
              </Link>

              {/* if there is no user. show the login button */}
              {!isLoading && !user && (
                <a href onClick={loginWithRedirect} className="navbar-item">
                  Login
                </a>
              )}

              {/* if there is a user. show user name and logout button */}
              {!isLoading && user && (
                <>
                  <Link to="/dashboard" className="navbar-item">
                    {user.name}
                  </Link>
                  <a
                    href
                    onClick={() => logout({ returnTo: window.location.origin })}
                    className="navbar-item"
                  >
                    Logout
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
