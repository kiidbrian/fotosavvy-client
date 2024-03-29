// Import the RTK Query methods from the React-specific entry point
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define our single API slice object
export const api = createApi({
  // The cache reducer expects to be added at `state.api` (already default - this is optional)
  reducerPath: "api",
  // All of our requests will have URLs starting with '/fakeApi'
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API,
    mode: "cors",
    prepareHeaders: (headers, { getState }) => {
      // By default, if we have a token in the store, let's use that for authenticated requests
      const token =
        getState().auth.token || JSON.parse(localStorage.getItem("token"));
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  // The "endpoints" represent operations and requests for this server
  endpoints: (builder) => ({
    // The `getPosts` endpoint is a "query" operation that returns data
    login: builder.mutation({
      // The URL for the request is '/fakeApi/posts'
      query: (credentials) => ({
        url: "/clients/access-token/",
        method: "POST",
        body: credentials,
      }),
    }),
    getGalleries: builder.query({
      query: () => "/galleries/",
    }),
    getPhotos: builder.query({
      query: () => "/clients/photos/",
    }),
  }),
});

// Export the auto-generated hook for the `getPosts` query endpoint
export const { useLoginMutation, useGetGalleriesQuery, useGetPhotosQuery } =
  api;
