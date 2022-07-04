import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IEstablishment } from "../../../types/apiTypes/establishment";
import { API } from "../../../utils/helpers/Consts";

export const establishmentsAPI = createApi({
  reducerPath: "establishmentsAPI",
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  tagTypes: ["Establishments","Contacts"],
  endpoints: (build) => ({
    fetchAllEstablishments: build.query<IEstablishment,number>({
      query: () => ({
        url: "/establishment"
      }),
      providesTags: (result) => ["Establishments"],
    }),
    fetchAllContacts: build.query({
        query: (limit) => ({
          url: `/establishment?take=${limit}&page=0`,
          params:{
            _limit: limit
          }
        }),
        providesTags: (result) => ["Contacts"],
      }),
  }),
});