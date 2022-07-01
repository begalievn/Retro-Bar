import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import classes from "./AdminPage.module.css";
import {
  AdminSidebar,
  AdminGeneral,
  AdminPhoto,
  AdminVideo,
  AdminContacts,
  AdminPoster,
  AdminEstablishment,
  AdminAdvertising,
} from "./components";
import { AdminPageTypes } from "../../types/adminPage/adminPage";
import { AlertComponent } from "../../UI";
import { useAppSelector } from "../../app/hooks";
import { ROUTES } from "../../utils/routes";

const AdminPage = () => {
  const [current, setCurrent] = useState<string>("photo");
  const [inputValue, setInputValue] = useState<AdminPageTypes | object>({});

  useEffect(() => {
    return () => setInputValue({});
  }, [current]);

  let alert = useAppSelector((state) => state.AlertSlice.alert);

  // const postHandler = () => {
  //   if (pages[current]?.innerPage?.name) {
  //     setCurrent(pages[current]?.innerPage?.name || "");
  //   }
  //   if (pages[current]?.name == Pages.photo) {
  //     AdminApi.addPhoto(inputValue as PhotoCard)
  //       .then(() =>
  //         dispatch(
  //           createAlert({ message: "Успешно опубликовано", type: "success" })
  //         )
  //       )
  //       .catch((e) => {
  //         dispatch(
  //           createAlert({ message: e.response.data.message, type: "error" })
  //         );
  //         setTimeout(() => dispatch(deleteAlert()), 2000);
  //       });
  //   }
  //   if (pages[current]?.name == Pages.video) {
  //     AdminApi.addVideo(inputValue as VideoCard)
  //       .then(() =>
  //         dispatch(
  //           createAlert({ message: "Успешно опубликовано", type: "success" })
  //         )
  //       )
  //       .catch((e) => {
  //         dispatch(
  //           createAlert({ message: e.response.data.message, type: "error" })
  //         );
  //       });
  //   }
  //
  //   if (pages[current]?.name == Pages.establishment) {
  //     AdminApi.addEstablishment(inputValue as Establishment)
  //       .then(() =>
  //         dispatch(
  //           createAlert({ message: "Успешно опубликовано", type: "success" })
  //         )
  //       )
  //       .catch((e) => {
  //         dispatch(
  //           createAlert({ message: e.response.data.message, type: "error" })
  //         );
  //       });
  //   }
  // };

  return (
    <div className={classes.adminWrapper}>
      <AdminSidebar />
      <div className={classes.contentWrapper}>
        <div className={classes.container}>
          <Routes>
            {ROUTES.map(({ link, id, element }) => (
              <Route path={link} element={element} key={id} />
            ))}
          </Routes>
        </div>
      </div>

      {alert.message.length !== 0 && <AlertComponent alertBody={alert} />}
    </div>
  );
};

export default AdminPage;
