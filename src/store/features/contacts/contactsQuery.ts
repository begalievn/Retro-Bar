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
      providesTags: (result) => ["Contacts"],
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
          method: 'PUT',
          body: contact,
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem('accessToken') || '{}'
            )}`,
          },
        }),
        invalidatesTags: ['Contacts'],
      }),
      createContacts: build.mutation({
        query: (contact) => ({
          url: `/admin/contacts/`,
          method: "POST",
          body: contact,
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("accessToken") || "{}"
            )}`,
          },
        }),
        invalidatesTags: (result) => ["Contacts"],
      }),
  }),
  
});
