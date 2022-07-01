import React, { useState } from "react";
import AdminGeneral from "../AdminGeneral/AdminGeneral";
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
import classes from "../../AdminPage.module.css";
import { Button } from "../../../../UI";

const videoPage = {
  name: "video",
  title: "Видео",
  add: "video",
  addLink: true,
  viewersRange: true,
  fields: [
    { title: "Название Заведения", name: "establishmentId" },
    { title: "Название Вечеринки", name: "eventName" },
    { title: "Видеограф", name: "photographerId" },
    { title: "Дата", name: "date" },
  ],
};

const AdminVideo = () => {
  const [inputValue, setInputValue] = useState<AdminPageTypes | object>({});
  const dispatch = useDispatch();

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
        page={videoPage}
        postHandler={postHandler}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      <div className={classes.buttonBlock}>
        <Button onClick={postHandler}>Опубликовать</Button>
      </div>
    </div>
  );
};

export default AdminVideo;
