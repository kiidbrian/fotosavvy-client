import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../features/auth/authSlice";
import { useLoginMutation } from "../features/api/apiSlice";

function Callback() {
  const { isLoading, user, isAuthenticated, error } = useAuth0();
  const dispatch = useDispatch();
  const history = useHistory();
  const [login] = useLoginMutation();

  const getToken = async (user_id) => {
    try {
      await login({ user_id });
    } catch (err) {
      console.log("err", err);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(setCurrentUser(user));
      getToken(user?.sub);
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
