import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import classes from '../AdminGeneral/AdminGeneral.module.css';
import {
  AdminPageTypes,
  PhotoCard,
} from '../../../../types/adminPage/adminPage';
import { AdminApi } from '../../../../API/adminApi/adminApi';
import {
  createAlert,
  deleteAlert,
} from '../../../../store/alertSlice/alertSlice';
import { Button } from '../../../../UI';
import DropFileInput from '../DropFileInput/DropFileInput';
import AdminInput from '../AdminInput/AdminInput';
import useDebounce from '../../../../hooks/useDebounce';

const photoPage = {
  name: 'photo',
  title: 'Фото',
  add: 'photos',
  addLink: false,
  viewersRange: true,
  fields: [
    { title: 'Название Заведения', name: 'establishmentId', type: 'input' },
    { title: 'Название Вечеринки', name: 'eventName', type: 'input' },
    { title: 'Фотограф', name: 'photographerId', type: 'input' },
    { title: 'Просмотры', name: 'views', type: 'input' },

    { title: 'Дата', name: 'date', type: 'input' },
  ],
};

const AdminPhoto = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState<AdminPageTypes | object>({
    establishmentId: '',
    photos: null,
    eventName: '',
    views: '',
    photographerId: '',
    date: '',
  });
  // const debounceEstablishment = useDebounce(inputValue?.establishmentId, 2000);

  const inputHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e.target.toString().includes('TextArea')) {
      e.target.style.height = e.target.scrollHeight + 'px';
    }
    if (e.target.name == 'establishmentId') {
    } else if (e.target.name == 'photographerId') {
    }

    setInputValue((prevInputs: AdminPageTypes) => ({
      ...prevInputs,
      [e.target.name]: e.target.value,
    }));
  };
  const postHandler = () => {
    AdminApi.addPhoto(inputValue as PhotoCard)
      .then(() => {
        dispatch(
          createAlert({ message: 'Успешно опубликовано', type: 'success' })
        );
        setTimeout(() => dispatch(deleteAlert()), 2000);
      })
      .catch((e) => {
        dispatch(
          createAlert({ message: e.response.data.message, type: 'error' })
        );
        setTimeout(() => dispatch(deleteAlert()), 2000);
      });
  };

  return (
    <div className={classes.generalBlock}>
      <div className={classes.adminGeneralBlock}>
        <h3 className={classes.adminTitle}>Фото</h3>
        <div className={classes.adminContent}>
          <DropFileInput
            type={'photos'}
            children={'Добавить картинки'}
            setInputValue={setInputValue}
          />

          <div className={classes.adminFields}>
            <div className={classes.adminInputs}>
              <AdminInput
                inputHandler={inputHandler}
                inputValue={inputValue}
                setInputValue={setInputValue}
                title={'Название Заведения'}
                name={'establishmentId'}
              />
              <AdminInput
                inputHandler={inputHandler}
                inputValue={inputValue}
                setInputValue={setInputValue}
                title={'Название Вечеринки'}
                name={'eventName'}
              />
              <AdminInput
                inputHandler={inputHandler}
                inputValue={inputValue}
                setInputValue={setInputValue}
                title={'Фотограф'}
                name={'photographerId'}
              />
              <AdminInput
                inputHandler={inputHandler}
                inputValue={inputValue}
                setInputValue={setInputValue}
                title={'Дата'}
                name={'date'}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={classes.buttonBlock}>
        <Button onClick={postHandler}>Опубликовать</Button>
      </div>
    </div>
  );
};

export default AdminPhoto;
