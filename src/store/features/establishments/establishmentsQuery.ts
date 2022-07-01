import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API } from "../../../utils/helpers/Consts";

export const establishmentsAPI = createApi({
  reducerPath: "establishmentsAPI",
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  tagTypes: ["Establishments"],
  endpoints: (build) => ({
    fetchAllEstablishments: build.query({
      query: () => ({
        url: "/photo"
      }),
      providesTags: (result) => ["Establishments"],
    }),
  }),
});