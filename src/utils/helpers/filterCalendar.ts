import axios from 'axios';
import { Dispatch } from 'react';
import { IDispatch } from '../../store/authorization/AuthFunc';
import { addFilterFhotos } from '../../store/features/photos/photosSlice';
import { API } from './Consts';
export const filterCalendarFunc = (date: string) => {
  return async (dispatch: Dispatch<IDispatch>) => {
    await axios(`${API}photo?take=10&page=1&date=${date}`)
      .then((response) => {
        dispatch(addFilterFhotos(response.data.photoCards));
      })
      .catch(() => {});
  };
};
