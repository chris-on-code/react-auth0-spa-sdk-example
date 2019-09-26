import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth0 } from '../contexts/auth0-context';

export default function PrivateRoute({ component: Component, ...rest }) {
  const { isLoading, isAuthenticated } = useAuth0();

  return (
    <Route
      {...rest}
      render={props =>
        !isLoading && isAuthenticated ? (
          <Component {...props} /> // show the component they wanted to see
        ) : (
          // redirect them to the home page
          <Redirect
            to={{
              pathname: '/',
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}
