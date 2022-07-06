import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import classes from "../../AdminPage.module.css";
import { IField, PhotoCard } from "../../../../types/adminPage/adminPage";
import { Button } from "../../../../UI";
import DropFileInput from "../DropFileInput/DropFileInput";
import AdminFields from "../AdminFields/AdminFields";
import useDebounce from "../../../../hooks/useDebounce";
import { establishmentsAPI } from "../../../../store/features/establishments/establishmentsQuery";
import { photoAPI } from "../../../../store/features/photos/photoQuery";
import { getFormData } from "../../../../utils/helpers/createFormData";
import {
  createAlert,
  deleteAlert,
} from "../../../../store/alertSlice/alertSlice";
import { alertBodySuccess } from "../../../../utils/helpers/alertBody";
import { AdminInput } from "../index";

const fields: IField[] = [
  {
    title: "Название Заведения",
    name: "establishmentId",
    errorMessage: "Название Заведения обязательное поле!",
    required: true,
    search: true,
  },
  {
    title: "Название Вечеринки",
    name: "eventName",
    errorMessage: "Название Вечеринки обязательное поле!",
    required: true,
  },
  {
    title: "Фотограф",
    name: "photographerId",
    errorMessage: "Фотограф обязательное поле!",
    required: true,
    search: true,
  },
  {
    title: "Дата",
    name: "date",
    errorMessage: "Дата обязательное поле!",
    type: "date",
    required: true,
    pattern: "\\d{4}-\\d{2}-\\d{2}",
  },
  {
    title: "Посмотры",
    name: "views",
    errorMessage: "Посмотры обязательное поле!",
    type: "text",
    required: true,
  },
];

const AdminPhoto = () => {
  const dispatch = useDispatch();
  const [createPhotoCard, { isLoading }] =
    photoAPI.useCreatePhotoCardMutation();
  const [establishmentsState, setEstablishmentsState] = useState([]);
  const [inputValue, setInputValue] = useState<PhotoCard>({
    establishmentId: "",
    photographerId: "",
  });
  const debounceEstablishment = useDebounce(inputValue?.establishmentId, 1000);
  // const [trigger, result] = establishmentsAPI.useFetchAllEstablishmentsQuery();

  const inputHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e.target.toString().includes("TextArea")) {
      e.target.style.height = e.target.scrollHeight + "px";
    }
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
    if (inputValue?.establishmentId.length > 2) {
      // trigger(`${debounceEstablishment}`);
    }
  };

  console.log(establishmentsState);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { formData } = getFormData(inputValue as PhotoCard);
    //@ts-ignore
    let timer;

    const startTimer = () => {
      //@ts-ignore
      clearTimeout(timer);
      setTimeout(() => dispatch(deleteAlert()), 1500);
    };
    await createPhotoCard(formData)
      .unwrap()
      .then(() => {
        dispatch(createAlert(alertBodySuccess));
        startTimer();
      })
      .catch((e) => {
        dispatch(createAlert({ message: e.data.message, type: "error" }));
        startTimer();
      });
  };

  return (
    <form onSubmit={handleSubmit} className={classes.generalBlock}>
      <div className={classes.adminGeneralBlock}>
        <h3 className={classes.adminTitle}>Фото</h3>
        <div className={classes.adminContent}>
          <DropFileInput
            type={"photos"}
            children={"Добавить картинки"}
            setInputValue={setInputValue}
          />
          <div className={classes.adminFields}>
            <div className={classes.adminInputs}>
              <AdminInput
                searchList={establishmentsState}
                required={true}
                errorMessage={"Название Заведения обязательное поле!"}
                inputValue={inputValue}
                inputHandler={inputHandler}
                title={"Название Заведения"}
                name={"establishmentId"}
              />
              <AdminInput
                required={true}
                errorMessage={"Название Вечеринки обязательное поле!"}
                inputHandler={inputHandler}
                inputValue={inputValue}
                title={"Название Вечеринки"}
                name={"eventName"}
              />
              <AdminInput
                required={true}
                errorMessage={"Фотограф обязательное поле!"}
                inputHandler={inputHandler}
                inputValue={inputValue}
                title={"Фотограф"}
                name={"photographerId"}
              />
              <AdminInput
                required={true}
                errorMessage={"Дата обязательное поле!"}
                inputHandler={inputHandler}
                inputValue={inputValue}
                title={"Дата"}
                name={"date"}
              />{" "}
              <AdminInput
                required={true}
                errorMessage={"Просмотры обязательное поле!"}
                inputHandler={inputHandler}
                inputValue={inputValue}
                title={"Просмотры"}
                name={"views"}
              />
            </div>
          </div>
        </div>
        <div className={classes.buttonBlock}>
          <Button type={"submit"}>Опубликовать</Button>
        </div>
      </div>
    </form>
  );
};

export default AdminPhoto;
