import axios from 'axios';
import { Dispatch } from 'redux';
import { IDispatch } from '../store/authorization/AuthFunc';
import { gettingVideos } from '../store/features/videos/videosSlice';

const URL = 'http://discoverystudio.xyz:6969';

export const getVideos = () => {
  return async (dispatch: Dispatch<IDispatch>) => {
    await axios.get(`${URL}/video`).then((res) => {
      console.log(res.data.photographers);
      dispatch(gettingVideos(res.data.photographers));
    });
  };
};
