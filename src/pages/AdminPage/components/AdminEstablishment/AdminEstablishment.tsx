import React, { FC, useState } from 'react';

import classes from './AdminEstablishment.module.css';
import styles from '../../AdminPage.module.css';
import {
  AdminPageTypes,
  Establishment,
  IPageBody,
  PhotoCard,
} from '../../../../types/adminPage/adminPage';
import ContactsComponent from '../ContactsComponent/ContactsComponent';
import AdminInput from '../AdminInput/AdminInput';
import { useDispatch } from 'react-redux';
import { AdminApi } from '../../../../API/adminApi/adminApi';
import {
  createAlert,
  deleteAlert,
} from '../../../../store/alertSlice/alertSlice';
import { Button } from '../../../../UI';
import useDebounce from '../../../../hooks/useDebounce';
import DropFileInput from '../DropFileInput/DropFileInput';
import AdminFields from '../AdminFields/AdminFields';
import { establishmentsAPI } from '../../../../store/features/establishments/establishmentsQuery';
import { alertBodySuccess } from '../../../../utils/helpers/alertBody';
import { getFormData } from '../../../../utils/helpers/createFormData';

const fields = {
  mainFields: [
    {
      title: 'Название',
      name: 'name',
      type: 'input',
      errorMessage: 'Название обязательное поле!',
      required: true,
    },
    {
      title: 'О заведении',
      name: 'description',
      type: 'textarea',
      errorMessage: 'О заведении обязательное поле!',
      required: true,
    },
  ],
};

const establishmentPage = {
  name: 'establishment',
  title: 'Заведение',
  add: 'logo',
  addLink: false,
  viewersRange: false,
  fields: [
    { title: 'Название', name: 'name', type: 'input' },
    { title: 'О заведении', name: 'description', type: 'textArea' },
  ],
  description: [
    { title: 'Время работы', name: 'workingHours' },
    { title: 'Средниии чек', name: 'check' },
    { title: 'Услуги', name: 'services' },
  ],
  contacts: [{ title: 'Номер', name: 'contacts' }],
};

const AdminEstablishment = () => {
  const [inputValue, setInputValue] = useState<AdminPageTypes | object>({});
  const dispatch = useDispatch();
  const [createEstablishmentCard, {}] =
    establishmentsAPI.useCreateEstablishmentCardMutation();
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

  const postHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    AdminApi.addEstablishment(inputValue as Establishment)
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { formData } = getFormData(inputValue as PhotoCard);
    let timer: () => void;

    const startTimer = () => {
      //@ts-ignore
      clearTimeout(timer);
      //@ts-ignore
      timer = setTimeout(() => dispatch(deleteAlert()), 1500);
    };
    await createEstablishmentCard(formData)
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
    <form className={classes.establishmentBlock} onSubmit={handleSubmit}>
      <div className={styles.adminGeneralBlock}>
        <h3 className={styles.adminTitle}>Заведения</h3>
        <div className={styles.adminContent}>
          <DropFileInput
            type={"logo"}
            children={"Добавить логотип"}
            setInputValue={setInputValue}
          />
          <AdminFields
            fields={fields.mainFields}
            inputHandler={inputHandler}
            inputValue={inputValue}
          />
        </div>
      </div>

      <div className={classes.descriptionWrapper}>
        <h3>Описание</h3>
        <div className={classes.descriptionBlocks}>
          <div className={classes.descriptionBlock}>
            <AdminInput
              inputHandler={inputHandler}
              color={'white'}
              title={'Время работы'}
              name={'workingHours'}
              inputValue={inputValue}
            />
          </div>
          <div className={classes.descriptionBlock}>
            <AdminInput
              inputHandler={inputHandler}
              color={'white'}
              title={'Номер'}
              name={'contacts'}
              inputValue={inputValue}
            />
          </div>
        </div>
      </div>

      <div className={classes.contactsWrapper}>
        <h3>Контакты</h3>
        <div className={classes.contacts}>
          <AdminInput
            inputHandler={inputHandler}
            color={'white'}
            title={'Номер'}
            name={'contacts'}
            inputValue={inputValue}
          />
        </div>
      </div>
      <div className={classes.btnBlock}>
        <Button type={'submit'}>Опубликовать</Button>
      </div>
    </form>
  );
};

export default AdminEstablishment;
