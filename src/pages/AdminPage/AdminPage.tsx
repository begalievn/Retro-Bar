import React, { useEffect, useState } from "react";

import classes from "./AdminPage.module.css";
import AdminSidebar from "./components/AdminSidebar/AdminSidebar";
import AdminGeneral from "./components/AdminGeneral/AdminGeneral";
import Establishment from "./components/Establishment/Establishment";
import {
  AlertBody,
  IPage,
  IPageBody,
  Pages,
  PhotoCard,
  VideoCard,
} from "../../types/adminPage/adminPage";
import { AlertSuccess } from "../../UI";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { AdminApi } from "../../API/adminApi/adminApi";
import { createAlert } from "../../store/alertSlice/alertSlice";

const pages: IPage = {
  photo: {
    name: "photo",
    title: "Фото",
    add: "photos",
    addLink: false,
    viewersRange: true,
    fields: [
      { title: "Название Заведения", name: "establishmentId" },
      { title: "Название Вечеринки", name: "eventName" },
      { title: "Фотограф", name: "photographerId" },
      { title: "Дата", name: "date" },
    ],
  },
  video: {
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
  },
  advertising: {
    name: "advertising",
    title: "Реклама",
    add: "photos",
    addLink: false,
    viewersRange: false,
    innerPage: { name: "poster", title: "Афиша" },
    fields: [
      { title: "Название", name: "establishmentName" },
      { title: "Описание", name: "eventName" },
      { title: "Привязать номер", name: "randomName" },
    ],
  },

  poster: {
    name: "poster",
    title: "Афиша",
    add: "photos",
    addLink: false,
    viewersRange: false,
    fields: [],
  },
  establishment: {
    name: "establishment",
    title: "Заведение",
    add: "photos",
    addLink: false,
    viewersRange: false,
    fields: [
      { title: "Название", name: "name" },
      { title: "О заведении", name: "description" },
    ],
    description: [
      { title: "Время работы", name: "workingHours" },
      { title: "Средниии чек", name: "check" },
      { title: "Услуги", name: "services" },
    ],
    contacts: [{ title: "Номер", name: "contacts" }],
  },
  contacts: {
    name: "contacts",
    title: "Контакты",
    add: "photos",
    addLink: false,
    viewersRange: false,
    fields: [
      { title: "О нас", name: "AboutUs" },
      { title: "Номер", name: "number" },
      { title: "Привязать номер", name: "randomName" },
    ],
  },
};

const AdminPage = () => {
  const [current, setCurrent] = useState<string>("photo");
  const [inputValue, setInputValue] = useState({});

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
  };

  return (
    <div className={classes.adminWrapper}>
      <AdminSidebar current={current} setCurrent={setCurrent} />
      <div className={classes.contentWrapper}>
        <div className={classes.container}>
          {current == Pages.establishment ? (
            <Establishment
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
