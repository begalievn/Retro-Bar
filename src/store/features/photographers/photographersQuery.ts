import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API } from "../../../utils/helpers/Consts";
import {
  Photographer,
  Photographers,
} from "../../../types/apiTypes/photographer";

export const photographersAPI = createApi({
  reducerPath: "photographersAPI",
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  tagTypes: ["Photographers"],
  endpoints: (build) => ({
    fetchAllPhotographers: build.query({
      query: (name) => ({
        url: "/photographer",
        params: {
          name,
        },
      }),
      providesTags: [{ type: "Photographers", id: "LIST" }],
    }),
    fetchPhotographersById: build.query<Photographer, void>({
      query: (id) => ({
        url: `/photographer/${id}`,
      }),
      providesTags: [{ type: "Photographers", id: "LIST" }],
    }),
    deletePhotographers: build.mutation({
      query: (id) => ({
        url: `/admin/photographer/${id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("accessToken") || "{}"
          )}`,
        },
      }),
      invalidatesTags: [{ type: "Photographers", id: "LIST" }],
    }),
    editPhotographers: build.mutation({
      query: (photographer) => ({
        url: `/admin/photographer/${photographer.id}`,
        method: "PUT",
        body: photographer,
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("accessToken") || "{}"
          )}`,
        },
      }),
      invalidatesTags: [{ type: "Photographers", id: "LIST" }],
    }),
    createPhotographers: build.mutation({
      query: (photographer) => ({
        url: `/admin/photographer/`,
        method: "POST",
        body: photographer,
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("accessToken") || "{}"
          )}`,
        },
      }),
      invalidatesTags: [{ type: "Photographers", id: "LIST" }],
    }),
  }),
});
