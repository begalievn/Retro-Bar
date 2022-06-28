import React, { useEffect, useState } from "react";

import classes from "./AdminPage.module.css";
import AdminSidebar from "./components/AdminSidebar/AdminSidebar";
import AdminInput from "./components/AdminInput/AdminInput";
import AdminGeneral from "./components/AdminGeneral/AdminGeneral";
import {
  AlertBody,
  IPage,
  IPageBody,
  Pages,
  PhotoCard,
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
      { title: "Название Заведения", name: "establishmentName" },
      { title: "Название Вечеринки", name: "eventName" },
      { title: "Видеограф", name: "photographer" },
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
    add: "",
    addLink: false,
    viewersRange: false,
    fields: [],
  },
  // establishment: {
  //   title: "",
  //   add: "",
  //   addLink: true,
  //   viewersRange: false,
  //   btn: false,
  //   fields: [],
  // },
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
      AdminApi.addPhoto(inputValue as PhotoCard).then((data) => {
        data !== typeof "string"
          ? dispatch(createAlert({ message: data, type: "error" }))
          : dispatch(createAlert({ message: "success", type: "success" }));
      });
    }
  };
  console.log(alert);

  return (
    <div className={classes.adminWrapper}>
      <AdminSidebar current={current} setCurrent={setCurrent} />
      <div className={classes.container}>
        <AdminGeneral
          postHandler={postHandler}
          currentPage={current}
          page={pages[current]}
          setInputValue={setInputValue}
          inputValue={inputValue}
          setCurrent={setCurrent}
        />
      </div>
      {alert.message.length !== 0 && <AlertSuccess alertBody={alert} />}
    </div>
  );
};

export default AdminPage;
