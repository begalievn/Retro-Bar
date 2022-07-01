import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API } from "../../../utils/helpers/Consts";

export const photoAPI = createApi({
  reducerPath: "photoAPI",
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  tagTypes: ["Photo"],
  endpoints: (build) => ({
    fetchAllPhotos: build.query({
      query: (limit = 100) => ({
        url: "/photo",
        params: {
          _limit: limit,
        },
      }),
      providesTags: (result) => ["Photo"],
    }),
  }),
});
