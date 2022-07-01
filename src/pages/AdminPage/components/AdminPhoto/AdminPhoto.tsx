import React, { useState } from "react";
import { useDispatch } from "react-redux";

import classes from "../../AdminPage.module.css";
import AdminGeneral from "../AdminGeneral/AdminGeneral";
import {
  AdminPageTypes,
  PhotoCard,
} from "../../../../types/adminPage/adminPage";
import { AdminApi } from "../../../../API/adminApi/adminApi";
import {
  createAlert,
  deleteAlert,
} from "../../../../store/alertSlice/alertSlice";
import { AlertComponent, Button } from "../../../../UI";
import { useAppSelector } from "../../../../app/hooks";

const photoPage = {
  name: "photo",
  title: "Фото",
  add: "photos",
  addLink: false,
  viewersRange: true,
  fields: [
    { title: "Название Заведения", name: "establishmentId", type: "input" },
    { title: "Название Вечеринки", name: "eventName", type: "input" },
    { title: "Фотограф", name: "photographerId", type: "input" },
    { title: "Дата", name: "date", type: "input" },
  ],
};

const AdminPhoto = () => {
  const [inputValue, setInputValue] = useState<AdminPageTypes | object>({});
  const dispatch = useDispatch();
  console.log(inputValue);
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
    <div className={classes.generalBlock}>
      <AdminGeneral
        page={photoPage}
        setInputValue={setInputValue}
        inputValue={inputValue}
        postHandler={postHandler}
      />

      <div className={classes.buttonBlock}>
        <Button onClick={postHandler}>Опубликовать</Button>
      </div>
    </div>
  );
};

export default AdminPhoto;
