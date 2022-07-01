import React, { useState } from "react";
import classes from "../../AdminPage.module.css";
import AdminGeneral from "../AdminGeneral/AdminGeneral";
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

const advertisingPage = {
  name: "advertising",
  title: "Реклама",
  add: "photos",
  addLink: false,
  viewersRange: false,
  innerPage: { name: "poster", title: "Афиша" },
  fields: [
    { title: "Название", name: "establishmentName" },
    { title: "Описание", name: "eventName", type: "textArea" },
    { title: "Привязать номер", name: "randomName" },
  ],
};

const AdminAdvertising = () => {
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
        page={advertisingPage}
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

export default AdminAdvertising;
