import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import AccessDenied from "./pages/AccessDenied";
import {
  selectCurrentUser,
  selectIsAuthenticated,
} from "./features/auth/authSlice";

export const PrivateRoute = ({ component: RouteComponent, roles }) => {
  const user = useSelector(selectCurrentUser)
  const isAuthenticated = useSelector(selectIsAuthenticated)
  const userHasRequiredRole = user && true

  if (isAuthenticated && userHasRequiredRole) {
    return <RouteComponent />
  }

  if (isAuthenticated && !userHasRequiredRole) {
    return <AccessDenied />
  }

  return <Navigate to="/gallery" />
}