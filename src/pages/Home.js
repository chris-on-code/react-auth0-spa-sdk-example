import React from 'react';
import { useAuth0 } from '../contexts/auth0-context';

export default function Home() {
  const { isLoading, user } = useAuth0();

  return (
    <div className="hero is-info is-fullheight">
      <div className="hero-body">
        <h1>Home Page</h1>

        {/* show user info if they are logged in */}
        {!isLoading && user && (
          <>
            <p>Hello {user.name}</p>
            {user.picture && <img src={user.picture} alt="My Avatar" />}
          </>
        )}
      </div>
    </div>
  );
}
