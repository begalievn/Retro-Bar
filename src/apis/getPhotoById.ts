import axios from 'axios';
import { URL } from './index';

export const getPhotoById = async (id: number) => {
  const result = await axios.get(`${URL}/photo/${id}`);
  // console.log('get photo by id', result);
  return result;
};
