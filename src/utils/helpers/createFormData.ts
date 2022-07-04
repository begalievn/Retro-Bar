import {
  Establishment,
  PhotoCard,
  VideoCard,
} from "../../types/adminPage/adminPage";

interface Photos {
  photos: number;
}
export const getFormData = (data: VideoCard | PhotoCard | Establishment) => {
  type mediaType = keyof PhotoCard | VideoCard;
  const formData: { [key: string]: any } = new FormData();

  for (let key in data) {
    const photosArr = Array.from(data[key as keyof mediaType]);
    if (key == "photos") {
      for (let i = 0; i < photosArr.length; i++) {
        formData.append("photos", data[key as keyof mediaType][i]);
      }
    } else {
      formData.append(`${key}`, data[key as keyof mediaType]);
    }
  }

  return { formData };
};
