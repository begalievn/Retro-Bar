import {Establishment, PhotoCard, VideoCard} from "../../types/adminPage/adminPage";

export const getFormData = (data: VideoCard | PhotoCard | Establishment) => {
  type mediaType = keyof PhotoCard | VideoCard;
  const formData: { [key: string]: any } = new FormData();

  for (let key in data) {
    formData.append(`${key}`, data[key as keyof mediaType]);
  }

  return {formData}
};
