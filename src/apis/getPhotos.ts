import axios from 'axios';
import { Dispatch } from 'redux';
import { IDispatch } from '../store/authorization/AuthFunc';
import { gettingPhotos } from '../store/features/photos/photosSlice';

const URL = 'http://discoverystudio.xyz:6969';

export const getPhotos = () => {

  return async (dispatch:Dispatch<IDispatch>)=>{

    let result = await axios.get(`${URL}/photo`).then((res) =>{res.data
    
      dispatch(gettingPhotos(res.data.photos))
    });
   
  }
};
