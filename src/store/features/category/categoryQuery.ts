import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { API } from "../../../utils/helpers/Consts";

export const categoryAPI = createApi({
  reducerPath: "categoryAPI",
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  tagTypes: ["Category"],
  endpoints: (build) => ({
    fetchAllCategory: build.query({
      query: () => ({
        url: "/category",
      }),
      providesTags: ["Category"],
    }),
  }),
});
