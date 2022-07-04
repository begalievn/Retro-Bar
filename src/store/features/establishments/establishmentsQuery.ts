import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IEstablishment } from "../../../types/apiTypes/establishment";
import { API } from "../../../utils/helpers/Consts";

export const establishmentsAPI = createApi({
  reducerPath: "establishmentsAPI",
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  tagTypes: ["Establishments"],
  endpoints: (build) => ({
    fetchAllEstablishments: build.query({
      query: () => ({
        url: "/establishment"
      }),
      providesTags: (result) => ["Establishments"],
    })
  }),
});