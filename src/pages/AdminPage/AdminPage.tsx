import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import classes from "./AdminPage.module.css";
import { AdminSidebar } from "./components";
import { AlertComponent } from "../../UI";
import { useAppSelector } from "../../app/hooks";
import { ROUTES } from "../../utils/routes";

const AdminPage = () => {
  let alert = useAppSelector((state) => state.AlertSlice.alert);
  return (
    <div className={classes.adminWrapper}>
      <AdminSidebar />
      <main className={classes.contentWrapper}>
        <div className={classes.container}>
          <Routes>
            {ROUTES.map(({ link, id, element }) => (
              <Route path={link} element={element} key={id} />
            ))}
          </Routes>
        </div>
      </main>

      {alert.message.length !== 0 && <AlertComponent alertBody={alert} />}
    </div>
  );
};

export default AdminPage;
