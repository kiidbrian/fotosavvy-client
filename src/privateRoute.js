import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { selectCurrentUser } from "./features/auth/authSlice";

const PrivateRoute = ({ children, ...rest }) => {
  // const user = useSelector(selectCurrentUser);
  const { isAuthenticated } = useAuth0();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
