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
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      api.endpoints.login.matchFulfilled,
      (state, { payload: { token } }) => {
        state.token = token;
        state.isAuthenticated = true;
      }
    );
  },
});

export const { logout } = slice.actions;

export default slice.reducer;

export const selectCurrentUser = (state) => state.auth.user;
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
