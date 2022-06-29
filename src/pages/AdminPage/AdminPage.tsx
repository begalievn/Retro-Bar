import React, { useEffect, useState } from "react";

import classes from "./AdminPage.module.css";
import AdminSidebar from "./components/AdminSidebar/AdminSidebar";
import AdminGeneral from "./components/AdminGeneral/AdminGeneral";
import EstablishmentComponent from "./components/Establishment/EstablishmentComponent";
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

const AdminPage = () => {
  const [current, setCurrent] = useState<string>("photo");
  const [inputValue, setInputValue] = useState<AdminPageTypes | object>({});

  useEffect(() => {
    return () => setInputValue({});
  }, [current]);

  console.log(inputValue);

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
      <AdminSidebar current={current} setCurrent={setCurrent} />
      <div className={classes.contentWrapper}>
        <div className={classes.container}>
          {current == Pages.establishment ? (
            <EstablishmentComponent
              postHandler={postHandler}
              currentPage={current}
              page={pages[current]!}
              setInputValue={setInputValue}
              inputValue={inputValue}
              setCurrent={setCurrent}
            />
          ) : (
            <AdminGeneral
              postHandler={postHandler}
              currentPage={current}
              page={pages[current]}
              setInputValue={setInputValue}
              inputValue={inputValue}
              setCurrent={setCurrent}
            />
          )}
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
