import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API } from "../../../utils/helpers/Consts";

export const posterAPI = createApi({
  reducerPath: "posterAPI",
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  tagTypes: ["Poster"],
  endpoints: (build) => ({
    fetchAllPoster: build.query({
      query: () => ({
        url: "/poster",
      }),
      providesTags: ["Poster"],
    }),
    createPosterMutation: build.mutation({
      query: (poster) => ({
        url: "/admin/poster",
        method: "POST",
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("accessToken") || "{}"
          )}`,
        },
        body: poster,
      }),
      invalidatesTags: ["Poster"],
    }),
  }),
});
