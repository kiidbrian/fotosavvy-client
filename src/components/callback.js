import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../features/auth/authSlice";

function Callback() {
  const { isLoading, user, isAuthenticated, error } = useAuth0();
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(setCurrentUser(user));
    }
  }, [isAuthenticated]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Some terrible happen. Contact Admin</div>;
  }

  return history.push("/");
}

export default Callback;
