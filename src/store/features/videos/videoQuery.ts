import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IVideo } from '../../../types/apiTypes/video';
import { API } from '../../../utils/helpers/Consts';

export const videoAPI = createApi({
  reducerPath: 'videoAPI',
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  tagTypes: ['Video'],
  endpoints: (build) => ({
    fetchAllVideos: build.query({
      query: () => ({
        url: '/video',
      }),
      providesTags: (result) => ['Video'],
    }),
    createVideoCard: build.mutation({
      query: (videoCard) => ({
        url: '/admin/videoCard',
        method: 'POST',
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem('accessToken') || '{}'
          )}`,
        },
        body: videoCard,
      }),
      invalidatesTags: (result) => ['Video'],
    }),
  }),
});
