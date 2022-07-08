import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { API } from '../../../utils/helpers/Consts';

export const advertisementsAPI = createApi({
  reducerPath: 'advertisementsAPI',
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  tagTypes: ['Advertisements'],
  endpoints: (build) => ({
    fetchAllAdvertisements: build.query({
      query: () => ({
        url: '/advertisement',
      }),
      providesTags: ['Advertisements'],
    }),
  }),
});
