import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API } from "../../../utils/helpers/Consts";

export const establishmentsAPI = createApi({
  reducerPath: "establishmentsAPI",
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  tagTypes: ["Establishments", "Contacts"],
  endpoints: (build) => ({
    fetchAllEstablishments: build.query({
      query: (name) => ({
        url: "/establishment",
        params: {
          name,
        },
      }),
      providesTags: ["Establishments"],
    }),
    fetchEstablishmentById: build.query({
      query: (id) => ({
        url: `/establishment/${id}`,
      }),
      providesTags: ["Establishments"],
    }),
    deleteEstablishment: build.mutation({
      query: (establishment) => ({
        url: `/admin/establishment/${establishment.id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("accessToken") || "{}"
          )}`,
        },
      }),
      invalidatesTags: ["Establishments"],
    }),
    editEstablishment: build.mutation({
      query: (establishment) => ({
        url: `/admin/establishment/${establishment.id}`,
        method: "PUT",
        body: {
          logo: establishment.logo,
          name: establishment.name,
          description: establishment.description,
          workingHours: establishment.workingHours,
          contacts: establishment.contacts,
          category: establishment.category,
          kitchenType: establishment.kitchenType,
          services: establishment.services,
          link: establishment.link,
          location: establishment.location,
          rate: establishment.rate,
        },
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("accessToken") || "{}"
          )}`,
        },
      }),
      invalidatesTags: ["Establishments"],
    }),
    createEstablishmentCard: build.mutation({
      query: (establishment) => ({
        url: `/admin/establishment/`,
        method: "POST",
        body: establishment,
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("accessToken") || "{}"
          )}`,
        },
      }),
      invalidatesTags: ["Establishments"],
    }),
  }),
});
