import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPhotoCards } from "../../../types/apiTypes/photo";
import { API } from "../../../utils/helpers/Consts";

export const photoAPI = createApi({
  reducerPath: "photoAPI",
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  tagTypes: ["Photo"],
  endpoints: (build) => ({
    fetchAllPhotos: build.query<IPhotoCards, number>({
      query: () => ({
        url: "/photo"
      }),
      providesTags: (result) => ["Photo"],
    }),
  }),
});
