import React, { useEffect, useState } from "react";

import classes from "./AdminPage.module.css";
import { AdminSidebar, AdminGeneral, AdminPhoto } from "./components";
import {
  AdminPageTypes,
  IPageBody,
  Pages,
  PhotoCard,
  VideoCard,
} from "../../types/adminPage/adminPage";
import { AlertSuccess } from "../../UI";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { AdminApi } from "../../API/adminApi/adminApi";
import { createAlert, deleteAlert } from "../../store/alertSlice/alertSlice";
import { pages } from "../../utils/helpers/adminPageHelper";
import { Establishment } from "../../types/adminPage/adminPage";
import { isValidUrl } from "../../utils/helpers/validUrl";
import { Route, Routes } from "react-router-dom";
import set = Reflect.set;

const AdminPage = () => {
  const [current, setCurrent] = useState<string>("photo");
  const [inputValue, setInputValue] = useState<AdminPageTypes | object>({});

  useEffect(() => {
    return () => setInputValue({});
  }, [current]);

  const dispatch = useAppDispatch();
  let alert = useAppSelector((state) => state.AlertSlice.alert);

  const postHandler = () => {
    if (pages[current]?.innerPage?.name) {
      setCurrent(pages[current]?.innerPage?.name || "");
    }
    if (pages[current]?.name == Pages.photo) {
      AdminApi.addPhoto(inputValue as PhotoCard)
        .then(() =>
          dispatch(
            createAlert({ message: "Успешно опубликовано", type: "success" })
          )
        )
        .catch((e) => {
          dispatch(
            createAlert({ message: e.response.data.message, type: "error" })
          );
          setTimeout(() => dispatch(deleteAlert()), 2000);
        });
    }
    if (pages[current]?.name == Pages.video) {
      AdminApi.addVideo(inputValue as VideoCard)
        .then(() =>
          dispatch(
            createAlert({ message: "Успешно опубликовано", type: "success" })
          )
        )
        .catch((e) => {
          dispatch(
            createAlert({ message: e.response.data.message, type: "error" })
          );
        });
    }

    if (pages[current]?.name == Pages.establishment) {
      AdminApi.addEstablishment(inputValue as Establishment)
        .then(() =>
          dispatch(
            createAlert({ message: "Успешно опубликовано", type: "success" })
          )
        )
        .catch((e) => {
          dispatch(
            createAlert({ message: e.response.data.message, type: "error" })
          );
        });
    }
  };

  return (
    <div className={classes.adminWrapper}>
      <div className={classes.contentWrapper}>
        <div className={classes.container}>

          <button onClick={postHandler} className={classes.btn}>
            Опубликовать
          </button>
        </div>
      </div>

      {alert.message.length !== 0 && <AlertSuccess alertBody={alert} />}
    </div>
  );
};

export default AdminPage;
