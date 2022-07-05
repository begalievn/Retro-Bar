import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IPhoto, IPhotoCards } from '../../../types/apiTypes/photo';
import { API } from '../../../utils/helpers/Consts';

export const photoAPI = createApi({
  reducerPath: 'photoAPI',
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  tagTypes: ['Photo', 'Contacts', 'PhotoCard'],
  endpoints: (build) => ({
    fetchAllPhotos: build.query({
      query: (take: number = 20) => ({
        url: '/photo',
        params: {
          take: take,
        },
      }),
      providesTags: (result) => ['Photo'],
    }),
    fetchAllContacts: build.query({
      query: (limit: number) => ({
        url: `/photo?take=${limit}&page=0`,
        params: {
          _limit: limit,
        },
      }),
      providesTags: (result) => ['Contacts'],
    }),
    deletePhoto: build.mutation({
      query: (photo) => ({
        url: `/admin/photoCard/${photo.id}`,
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem('accessToken') || '{}'
          )}`,
        },
      }),
      invalidatesTags: ['Photo'],
    }),
    editPhoto: build.mutation({
      query: (photo) => ({
        url: `/admin/photoCard/${photo.id}`,
        method: 'PUT',
        body: photo,
      }),
      invalidatesTags: ['Photo'],
    }),
    createPhotoCard: build.mutation({
      query: (photoCard) => ({
        url: '/admin/photoCard',
        method: 'POST',
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem('accessToken') || '{}'
          )}`,
        },
        body: photoCard,
      }),
      invalidatesTags: (result) => ['PhotoCard'],
    }),
  }),
});
