import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

import { login } from '../../store/AuthFunc';
import { addTextError, deleteTextError } from '../../store/AuthorizationSlice';

import { IUser } from '../../types/userTypes';
import style from './Authorization.module.css';

export default function AuthorizationPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [viewCheck, setViewCheck] = useState<boolean>(false);

  const [typeinp, setTypeinp] = useState('password');

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  let validData = useAppSelector((state) => state.AuthorizationSlice.validData);
  let userData = useAppSelector((state) => state.AuthorizationSlice.userData);

  const handleLogin = (username: string, password: string) => {
    let data: IUser = {
      username,
      password,
    };
    dispatch(login(data));
  };

  useEffect(() => {
    setTimeout(() => {
      dispatch(deleteTextError());
    }, 4000);
  }, [validData]);

  useEffect(() => {
    if (userData == true) {
      navigate('/admin');
    }
  }, [userData]);

  const checkFunc = () => {
    setViewCheck(!viewCheck);
    if (viewCheck === false) {
      setTypeinp('text');
    } else {
      setTypeinp('password');
    }
  };

  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.textError}>{validData}</div>
        <input
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          placeholder="Логин"
          className={style.inputData}
        />
        <input
          type={typeinp}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Пароль"
          className={style.inputData}
        />
        <div className={style.passwordCheckbox}>
          <input
            onChange={() => checkFunc()}
            checked={viewCheck}
            type="checkbox"
          />
          <span>Показать пароль</span>
        </div>
        <button onClick={() => handleLogin(username, password)}>Войти</button>
      </div>
    </div>
  );
}
