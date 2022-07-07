import axios from "axios";
import { Dispatch } from "redux";
import { IDispatch } from "../store/authorization/AuthFunc";
import { gettingPhotos } from "../store/features/photos/photosSlice";
import { API } from "../utils/helpers/Consts";

export const getSearch = (value: string) => {
  console.log("Запрос на  бэк:", value);

  return async (dispatch: Dispatch<IDispatch>) => {
    await axios.get(`${API}photo?event=${value}`).then((res) => {
      console.log("Ответ", res.data);
    });
  };
};
