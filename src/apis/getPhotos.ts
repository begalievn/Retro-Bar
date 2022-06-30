import axios from 'axios';
import { Dispatch } from 'redux';
import { IDispatch } from '../store/authorization/AuthFunc';
import { gettingPhotos } from '../store/features/photos/photosSlice';
import { API } from '../utils/helpers/Consts';


export const getPhotos = () => {
<<<<<<< HEAD

  return async (dispatch:Dispatch<IDispatch>)=>{

    await axios.get(`${API}photo`).then((res) =>{
    
      dispatch(gettingPhotos(res.data.photos))
=======
  return async (dispatch: Dispatch<IDispatch>) => {
    await axios.get(`${URL}/photo`).then((res) => {
      console.log(res.data.photos);
      dispatch(gettingPhotos(res.data.photos));
>>>>>>> 904a22db1080c2ce1a9c9f591039965a42e31239
    });
  };
};
