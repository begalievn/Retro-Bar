import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import classes from "./AdminPage.module.css";
import { AdminSidebar } from "./components";
import { AlertComponent } from "../../UI";
import { useAppSelector } from "../../app/hooks";
import { ROUTES } from "../../utils/routes";
import { establishmentsAPI } from "../../store/features/establishments/establishmentsQuery";
import { photographersAPI } from "../../store/features/photographers/photographersQuery";
import { useDispatch } from "react-redux";
import { gettingEstablishments } from "../../store/features/establishments/establishmentsSlice";
import { gettingPhotographers } from "../../store/features/photographers/photographersSlice";
import { gettingCategory } from "../../store/features/category/categorySlice";
import { categoryAPI } from "../../store/features/category/categoryQuery";

const AdminPage = () => {
  const dispatch = useDispatch();

  let alert = useAppSelector((state) => state.AlertSlice.alert);

  const { data: establishmentsData = [] } =
    establishmentsAPI.useFetchAllEstablishmentsQuery("");
  const { data: photographersData = [] } =
    photographersAPI.useFetchAllPhotographersQuery("");
  const { data: categoriesData } = categoryAPI.useFetchAllCategoryQuery("");

  useEffect(() => {
    dispatch(gettingEstablishments(establishmentsData.establishments));
    dispatch(gettingPhotographers(photographersData.photographers));
    dispatch(gettingCategory(categoriesData?.categories));
  }, [photographersData, establishmentsData, categoriesData]);

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
