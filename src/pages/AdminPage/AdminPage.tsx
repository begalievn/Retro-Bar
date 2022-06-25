import React, { useEffect, useState } from "react";

import classes from "./AdminPage.module.css";
import AdminSidebar from "./components/AdminSidebar/AdminSidebar";
import AdminInput from "./components/AdminInput/AdminInput";
import AdminGeneral from "./components/AdminGeneral/AdminGeneral";
import { IPage, IPageBody } from "../../types/adminPage/adminPage";

const AdminPage = () => {
  const [current, setCurrent] = useState<string>("photo");
  const [inputValue, setInputValue] = useState({});

  useEffect(() => {
    return () => setInputValue({});
  }, [current]);

  console.log(inputValue);
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
      title: "Реклама",
      add: "",
      addLink: true,
      viewersRange: false,
      btn: true,
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

  console.log(inputValue);
  return (
    <div className={classes.adminWrapper}>
      <AdminSidebar current={current} setCurrent={setCurrent} />
      <div className={classes.container}>
        <AdminGeneral
          page={pages[current]}
          setInputValue={setInputValue}
          inputValue={inputValue}
        />
      </div>
    </div>
  );
};

export default AdminPage;
