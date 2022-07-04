import React, { useState } from "react";

import classes from "../AdminGeneral/AdminGeneral.module.css";

import {
  AdminPageTypes,
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

const videoPage = {
  name: "video",
  title: "Видео",
  add: "video",
  addLink: true,
  viewersRange: true,
  fields: [
    { title: "Название Заведения", name: "establishmentId", type: "input" },
    { title: "Название Вечеринки", name: "eventName", type: "input" },
    { title: "Видеограф", name: "photographerId", type: "input" },
    { title: "Дата", name: "date", type: "input" },
  ],
};

const AdminVideo = () => {
  const [inputValue, setInputValue] = useState<AdminPageTypes | object>({});
  const dispatch = useDispatch();

  const inputHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e.target.toString().includes("TextArea")) {
      e.target.style.height = e.target.scrollHeight + "px";
    }
    if (e.target.name == "establishmentId") {
    } else if (e.target.name == "photographerId") {
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
      <div className={classes.generalBlock}>
        <div className={classes.adminGeneralBlock}>
          <h3 className={classes.adminTitle}>Фото</h3>
          <div className={classes.adminContent}>
            <DropFileInput
              type={"video"}
              children={"Добавить видео"}
              setInputValue={setInputValue}
            />

            <div className={classes.adminFields}>
              <div className={classes.adminInputs}>
                <AdminInput
                  inputHandler={inputHandler}
                  inputValue={inputValue}
                  setInputValue={setInputValue}
                  title={"Название Заведения"}
                  name={"establishmentId"}
                />
                <AdminInput
                  inputHandler={inputHandler}
                  inputValue={inputValue}
                  setInputValue={setInputValue}
                  title={"Название Вечеринки"}
                  name={"eventName"}
                />
                <AdminInput
                  inputHandler={inputHandler}
                  inputValue={inputValue}
                  setInputValue={setInputValue}
                  title={"Видеограф"}
                  name={"photographerId"}
                />
                <AdminInput
                  inputHandler={inputHandler}
                  inputValue={inputValue}
                  setInputValue={setInputValue}
                  title={"Дата"}
                  name={"date"}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={classes.buttonBlock}>
          <Button onClick={postHandler}>Опубликовать</Button>
        </div>
      </div>
    </div>
  );
};

export default AdminVideo;
