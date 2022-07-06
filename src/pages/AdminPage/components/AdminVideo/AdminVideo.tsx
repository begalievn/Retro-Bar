import React, { useState } from "react";

import classes from "../../AdminPage.module.css";

import {
  AdminPageTypes,
  IField,
  PhotoCard,
  VideoCard,
} from "../../../../types/adminPage/adminPage";
import { useDispatch } from "react-redux";
import { AdminApi } from "../../../../API/adminApi/adminApi";
import {
  createAlert,
  deleteAlert,
} from "../../../../store/alertSlice/alertSlice";
import { Button } from "../../../../UI";
import DropFileInput from "../DropFileInput/DropFileInput";
import AdminInput from "../AdminInput/AdminInput";
import { AdminFields } from "../index";

const fields: IField[] = [
  {
    title: "Название Заведения",
    name: "establishmentId",
    type: "input",
    errorMessage: "Название Заведения обязательное поле!",
    required: true,
  },
  {
    title: "Название Вечеринки",
    name: "eventName",
    type: "input",
    errorMessage: "Название Вечеринки обязательное поле!",
    required: true,
  },
  {
    title: "Видеограф",
    name: "photographerId",
    type: "input",
    errorMessage: "Видеограф обязательное поле!",
    required: true,
  },
  {
    title: "Дата",
    name: "date",
    type: "date",
    errorMessage: "Дата обязательное поле!",
    required: true,
  },
  {
    title: "Посмотры",
    name: "views",
    errorMessage: "Посмотры обязательное поле!",
    type: "text",
    required: true,
  },
];

const AdminVideo = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState<AdminPageTypes | object>({});

  const inputHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e.target.toString().includes("TextArea")) {
      e.target.style.height = e.target.scrollHeight + "px";
    }
    setInputValue((prevInputs: AdminPageTypes) => ({
      ...prevInputs,
      [e.target.name]: e.target.value,
    }));
  };

  const postHandler = () => {
    AdminApi.addVideo(inputValue as VideoCard)
      .then(() => {
        dispatch(
          createAlert({ message: "Успешно опубликовано", type: "success" })
        );
        setTimeout(() => dispatch(deleteAlert()), 2000);
      })
      .catch((e) => {
        dispatch(
          createAlert({ message: e.response.data.message, type: "error" })
        );
        setTimeout(() => dispatch(deleteAlert()), 2000);
      });
  };
  return (
    <div className={classes.generalBlock}>
      <div className={classes.adminGeneralBlock}>
        <h3 className={classes.adminTitle}>Видео</h3>
        <div className={classes.adminContent}>
          <DropFileInput
            type={"video"}
            children={"Добавить видео"}
            setInputValue={setInputValue}
          />
          <AdminFields
            fields={fields}
            inputHandler={inputHandler}
            inputValue={inputValue}
          />
        </div>
        <div className={classes.buttonBlock}>
          <Button onClick={postHandler}>Опубликовать</Button>
        </div>
      </div>
    </div>
  );
};

export default AdminVideo;
