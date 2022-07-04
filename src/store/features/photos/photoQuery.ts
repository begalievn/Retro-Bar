import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IPhoto, IPhotoCards } from '../../../types/apiTypes/photo';
import { API } from '../../../utils/helpers/Consts';

export const photoAPI = createApi({
  reducerPath: 'photoAPI',
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  tagTypes: ["Photo","Contacts"],
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
        query: (limit) => ({
          url: `/photo?take=${limit}&page=0`,
          params:{
            _limit: limit
          }
        }),
        providesTags: (result) => ["Contacts"],
      })
  }),
});
