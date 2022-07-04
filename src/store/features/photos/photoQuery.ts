import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPhoto, IPhotoCards } from "../../../types/apiTypes/photo";
import { API } from "../../../utils/helpers/Consts";

export const photoAPI = createApi({
  reducerPath: "photoAPI",
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  tagTypes: ["Photo"],
  endpoints: (build) => ({
    fetchAllPhotos: build.query({
      query: () => ({
        url: "/photo"
      }),
      providesTags: (result) => ["Photo"],
    }),
  }),
});
