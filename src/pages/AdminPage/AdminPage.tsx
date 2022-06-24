import React, { useState } from "react";

import classes from "./AdminPage.module.css";
import AdminSidebar from "./components/AdminSidebar/AdminSidebar";
import AdminInput from "./components/AdminInput/AdminInput";
import AdminGeneral from "./components/AdminGeneral/AdminGeneral";
import { IPage } from "../../types/adminPage/adminPage";

const AdminPage = () => {
  const [current, setCurrent] = useState<string>("photo");

  const pages: IPage = {
    photo: {
      title: "Фото",
      add: "photo",
      addLink: true,
      viewersRange: true,
      btn: true,
      fields: [
        { title: "Название Заведения", name: "establishmentName" },
        { title: "Название Вечеринки", name: "eventName" },
        { title: "Фотограф", name: "photographer" },
        { title: "Дата", name: "date" },
      ],
    },
    video: {
      title: "Видео",
      add: "video",
      addLink: true,
      viewersRange: true,
      btn: true,
      fields: [
        { title: "Название Заведения", name: "establishmentName" },
        { title: "Название Вечеринки", name: "eventName" },
        { title: "Видеограф", name: "photographer" },
        { title: "Дата", name: "date" },
      ],
    },
    advertising: {
      title: "Видео",
      add: "video",
      addLink: true,
      viewersRange: true,
      btn: true,
      fields: [
        { title: "Название Заведения", name: "establishmentName" },
        { title: "Название Вечеринки", name: "eventName" },
        { title: "Видеограф", name: "photographer" },
        { title: "Дата", name: "date" },
      ],
    },
  };

  return (
    <div className={classes.adminWrapper}>
      <AdminSidebar current={current} setCurrent={setCurrent} />
      <div className={classes.container}>
        <AdminGeneral page={pages[current]} />
      </div>
    </div>
  );
};

export default AdminPage;
