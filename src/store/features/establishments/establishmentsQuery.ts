import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IEstablishment } from '../../../types/apiTypes/establishment';
import { API } from '../../../utils/helpers/Consts';

export const establishmentsAPI = createApi({
  reducerPath: 'establishmentsAPI',
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  tagTypes: ['Establishments', 'Contacts'],
  endpoints: (build) => ({
    fetchAllEstablishments: build.query({
      query: (name) => ({
        url: '/establishment',
        params: {
          name,
        },
      }),
      providesTags: ['Establishments'],
    }),
    fetchEstablishmentById: build.query({
      query: (id) => ({
        url: `/establishment/${id}`,
      }),
      providesTags: ['Establishments'],
    }),
    deleteEstablishment: build.mutation({
      query: (establishment) => ({
        url: `/admin/establishment/${establishment.id}`,
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem('accessToken') || '{}'
          )}`,
        },
      }),
      invalidatesTags: ['Establishments'],
    }),
    editEstablishment: build.mutation({
      query: (establishment) => ({
        url: `/admin/establishment/${establishment.id}`,
        method: 'PUT',
        body: establishment,
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem('accessToken') || '{}'
          )}`,
        },
      }),
      invalidatesTags: ['Establishments'],
    }),
    createEstablishmentCard: build.mutation({
      query: (establishment) => ({
        url: `/admin/establishment/`,
        method: 'POST',
        body: establishment,
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem('accessToken') || '{}'
          )}`,
        },
      }),
      invalidatesTags: (result) => ['Establishments'],
    }),
  }),
});
