import { $host } from "../../utils/helpers/host";
import {
  IPageBody,
  PhotoCard,
  VideoCard,
} from "../../types/adminPage/adminPage";

export class AdminApi {
  static async addVideo(videoData: VideoCard) {
    const { data } = await $host.post("/admin/videoCard", videoData);
    return data;
  }

  static async addPhoto(photoData: PhotoCard) {
    const formData: { [key: string]: any } = new FormData();
    for (let key in photoData) {
      formData.append(`${key}`, photoData[key as keyof PhotoCard]);
    }

    try {
      const token = localStorage.token;
      const config = {
        headers: {
          Authorization: `Bearer ${token && JSON.parse(token).accessToken}`,
        },
      };
      const { data } = await $host.post("/admin/photoCard", formData, config);
      return data;
    } catch (e) {
      const err = e as Error;
      console.log(err);
      return err.message;
    }
  }
}
