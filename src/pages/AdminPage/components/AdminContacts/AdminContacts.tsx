import React, { useState } from "react";

import classes from "../../AdminPage.module.css";
import { Button } from "../../../../UI";
import {
  AdminPageTypes,
  PhotoCard,
} from "../../../../types/adminPage/adminPage";
import { useDispatch } from "react-redux";
import { AdminApi } from "../../../../API/adminApi/adminApi";
import {
  createAlert,
  deleteAlert,
} from "../../../../store/alertSlice/alertSlice";
import DropFileInput from "../DropFileInput/DropFileInput";
import AdminFields from "../AdminFields/AdminFields";

const fields = [
  {
    title: "О нас",
    name: "AboutUs",
    type: "textarea",
    errorMessage: "О нас обязательное поле!",
    required: true,
  },
  {
    title: "Номер",
    name: "number",
    errorMessage: "Номер обязательное поле!",
    required: true,
  },
  {
    title: "Привязать номер",
    name: "randomName",
    errorMessage: "Привязать номер обязательное поле!",
    required: true,
  },
];

const AdminContacts = () => {
  const [inputValue, setInputValue] = useState<AdminPageTypes | object>({});
  const dispatch = useDispatch();

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
    AdminApi.addPhoto(inputValue as PhotoCard)
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
    <form className={classes.generalBlock} onSubmit={postHandler}>
      <div className={classes.adminGeneralBlock}>
        <h3 className={classes.adminTitle}>Контакты</h3>
        <div className={classes.adminContent}>
          <DropFileInput
            type={"photos"}
            children={"Добавить картинки"}
            setInputValue={setInputValue}
          />
          <AdminFields
            fields={fields}
            inputHandler={inputHandler}
            inputValue={inputValue}
          />
        </div>
        <div className={classes.buttonBlock}>
          <Button type={"submit"}>Опубликовать</Button>
        </div>
      </div>
    </form>
  );
};

export default AdminContacts;
