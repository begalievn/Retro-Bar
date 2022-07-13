import { IUser } from '../../types/userTypes';
import axios from 'axios';
import { API } from '../../utils/helpers/Consts';
import {
  addTextError,
  addToken,
  checkAdmin,
  deleteToken,
} from './AuthorizationSlice';
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

    let res = await axios
      .post(`${API}admin/login`, data, config)
      .then((response) => {
        localStorage.setItem(
          'accessToken',
          JSON.stringify(response.data.accessToken)
        );
        dispatch(checkAdmin(true));
        dispatch(addToken(response.data.accessToken));
      })
      .catch(() => {
        dispatch(addTextError());
      });
  };
};

export const logOut = () => {
  return (dispatch: Dispatch<IDispatch>) => {
    localStorage.removeItem('accessToken');
    dispatch(checkAdmin(false));
    dispatch(deleteToken());
  };
};
