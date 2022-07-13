import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API } from '../../../utils/helpers/Consts';

export const searchAPI = createApi({
  reducerPath: 'searchApi',
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  tagTypes: ['Search'],
  endpoints: (builder) => ({
    getSearchResults: builder.query({
      query: (name) => ({
        url: '/search',
        params: {
          name: name,
        },
      }),
      providesTags: (result) => ['Search'],
    }),
  }),
});
