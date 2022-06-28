import { $host } from "../../utils/helpers/host";
import {
  IPageBody,
  PhotoCard,
  VideoCard,
} from "../../types/adminPage/adminPage";
import { config } from "../../utils/getConfig";
import { Simulate } from "react-dom/test-utils";
import { getFormData } from "../../utils/helpers/createFormData";

export class AdminApi {
  static async addVideo(videoData: VideoCard) {
    const { formData } = getFormData(videoData);
    try {
      const { data } = await $host.post("/admin/videoCard", formData, config);
      return data;
    } catch (e) {
      const err = e as Error;
      console.log(err);
      return err;
    }
  }

  static async addPhoto(photoData: PhotoCard) {
    const { formData } = getFormData(photoData);
    try {
      const { data } = await $host.post("/admin/photoCard", formData, config);
      return data;
    } catch (e) {
      const err = e as Error;
      return err.message;
    }
  }
}
