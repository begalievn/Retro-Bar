import axios from "axios";
import { Dispatch } from "redux";
import { IDispatch } from "../store/authorization/AuthFunc";
import { gettingPhotos } from "../store/features/photos/photosSlice";
import { API } from "../utils/helpers/Consts";

export const getPhotos = () => {
  return async (dispatch: Dispatch<IDispatch>) => {
    await axios.get(`${API}photo`).then((res) => {
      console.log(res.data.photos);
      dispatch(gettingPhotos(res.data.photoCards));
    });
  };
};
