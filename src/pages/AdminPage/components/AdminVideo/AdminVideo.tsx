import React, { useState } from 'react';

import classes from '../../AdminPage.module.css';

import {
  AdminPageTypes,
  IField,
  VideoCard,
} from '../../../../types/adminPage/adminPage';
import { useDispatch } from 'react-redux';
import { AdminApi } from '../../../../API/adminApi/adminApi';
import {
  createAlert,
  deleteAlert,
} from '../../../../store/alertSlice/alertSlice';
import { Button } from '../../../../UI';
import DropFileInput from '../DropFileInput/DropFileInput';
import AdminInput from '../AdminInput/AdminInput';
import { AdminFields } from '../index';
import { videoAPI } from '../../../../store/features/videos/videoQuery';
import { getFormData } from '../../../../utils/helpers/createFormData';
import { alertBodySuccess } from '../../../../utils/helpers/alertBody';

const fields: IField[] = [
  {
    title: 'Название Заведения',
    name: 'establishmentId',
    type: 'input',
    errorMessage: 'Название Заведения обязательное поле!',
    required: true,
  },
  {
    title: 'Название Вечеринки',
    name: 'eventName',
    type: 'input',
    errorMessage: 'Название Вечеринки обязательное поле!',
    required: true,
  },
  {
    title: 'Видеограф',
    name: 'photographerId',
    type: 'input',
    errorMessage: 'Видеограф обязательное поле!',
    required: true,
  },
  {
    title: 'Дата',
    name: 'date',
    type: 'date',
    errorMessage: 'Дата обязательное поле!',
    required: true,
  },
  {
    title: 'Посмотры',
    name: 'views',
    errorMessage: 'Посмотры обязательное поле!',
    type: 'text',
    required: true,
  },
];

const AdminVideo = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState<AdminPageTypes | object>({});
  const [createVideoCard, { isLoading }] =
    videoAPI.useCreateVideoCardMutation();

  const inputHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e.target.toString().includes('TextArea')) {
      e.target.style.height = e.target.scrollHeight + 'px';
    }
    setInputValue((prevInputs: AdminPageTypes) => ({
      ...prevInputs,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { formData } = getFormData(inputValue as VideoCard);
    let timer: () => void;

    const startTimer = () => {
      //@ts-ignore
      clearTimeout(timer);
      //@ts-ignore
      timer = setTimeout(() => dispatch(deleteAlert()), 1500);
    };
    await createVideoCard(formData)
      .unwrap()
      .then(() => {
        dispatch(createAlert(alertBodySuccess));
        startTimer();
      })
      .catch((e) => {
        dispatch(createAlert({ message: e.data.message, type: 'error' }));
        startTimer();
      });
  };
  return (
    <form onSubmit={handleSubmit} className={classes.generalBlock}>
      <div className={classes.adminGeneralBlock}>
        <h3 className={classes.adminTitle}>Видео</h3>
        <div className={classes.adminContent}>
          <DropFileInput
            type={'video'}
            children={'Добавить видео'}
            setInputValue={setInputValue}
          />
          <AdminFields
            fields={fields}
            inputHandler={inputHandler}
            inputValue={inputValue}
          />
        </div>
        <div className={classes.buttonBlock}>
          <Button type="submit">Опубликовать</Button>
        </div>
      </div>
    </form>
  );
};

export default AdminVideo;
