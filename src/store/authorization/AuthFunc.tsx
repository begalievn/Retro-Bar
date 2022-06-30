import { IUser } from '../../types/userTypes';
import axios from 'axios';
import { API } from '../../utils/helpers/Consts';
import { addTextError, checkAdmin } from './AuthorizationSlice';
import { Dispatch } from 'react';

export interface IDispatch {
  payload: any;
  type: string;
}

export const login = (userData: IUser) => {
  return async (dispatch: Dispatch<IDispatch>) => {
    const config = {
      headers: { 'Content-Type': 'application/json' },
    };
    let data = JSON.stringify(userData);

    await axios
      .post(`${API}admin/login`, data, config)
      .then((response) => {
        console.log(response);
        localStorage.setItem('token', JSON.stringify(response.data));
        dispatch(checkAdmin(true));
      })
      .catch(() => {
        dispatch(addTextError());
      });
  };
};

export const logOut = () => {
  return (dispatch: Dispatch<IDispatch>) => {
    localStorage.removeItem('token');
    dispatch(checkAdmin(false));
  };
};
