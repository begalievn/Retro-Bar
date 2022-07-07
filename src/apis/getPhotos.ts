import axios from 'axios';
import { Dispatch } from 'redux';
import { IDispatch } from '../store/authorization/AuthFunc';
import { gettingPhotos } from '../store/features/photos/photosSlice';
import { API } from '../utils/helpers/Consts';
const URL = 'http://discoverystudio.xyz:6969';

export const getPhotos = () => {
  return async (dispatch: Dispatch<IDispatch>) => {
    await axios.get(`${API}photo`).then((res) => {
    
      dispatch(gettingPhotos(res.data.photoCards));
    });
  };
};
