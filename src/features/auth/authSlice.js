import { createSlice } from "@reduxjs/toolkit";
import { api } from "../api/apiSlice";

const slice = createSlice({
  name: "auth",
  initialState: { user: null, token: null, isAuthenticated: false },
  reducers: {
    logout: (state) => {
      state.token = null;
      state.isAuthenticated = false;
    },
    setCurrentUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      api.endpoints.login.matchFulfilled,
      (state, { payload: { access_token } }) => {
        state.token = access_token;
        state.isAuthenticated = true;
        localStorage.setItem("token", JSON.stringify(access_token));
      }
    );
  },
});

export const { logout, setCurrentUser } = slice.actions;

export default slice.reducer;

export const selectCurrentUser = (state) => state.auth.user;
export const selectToken = (state) =>
  state.auth.token || JSON.parse(localStorage.getItem("token"));
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
