import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API } from "../../../utils/helpers/Consts";

export const contactsAPI = createApi({
  reducerPath: "contactsAPI",
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  tagTypes: ["Contacts"],
  endpoints: (build) => ({
    fetchAllContacts: build.query({
      query: () => ({
        url: `/contacts`,
      }),
      providesTags: ["Contacts"],
    }),
    deleteContact: build.mutation({
      query: (contact) => ({
        url: `/admin/contact/${contact.id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("accessToken") || "{}"
          )}`,
        },
      }),
      invalidatesTags: ["Contacts"],
    }),
    editContact: build.mutation({
      query: (contact) => ({
        url: `/admin/contact/${contact.id}`,
        method: "PUT",
        body: contact,
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("accessToken") || "{}"
          )}`,
        },
      }),
      invalidatesTags: ["Contacts"],
    }),
    createContact: build.mutation({
      query: (contact) => ({
        url: `/admin/contact/`,
        method: "POST",
        body: contact,
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("accessToken") || "{}"
          )}`,
        },
      }),
      invalidatesTags: ["Contacts"],
    }),
  }),
});
