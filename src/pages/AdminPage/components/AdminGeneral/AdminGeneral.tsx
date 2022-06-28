import React, { FC, useEffect, useState } from "react";

import classes from "./AdminGeneral.module.css";
import { IPageBody, Pages } from "../../../../types/adminPage/adminPage";
import AdminInput from "../AdminInput/AdminInput";
import { AdminApi } from "../../../../API/adminApi/adminApi";
import AddMedia from "../AddMedia/AddMedia";

interface AdminGeneralProps {
  page?: IPageBody;
  inputValue: any;
  setInputValue: (some: any) => void;
  currentPage: string;
  setCurrent: (some: any) => void;
}

const AdminGeneral: FC<AdminGeneralProps> = ({
  page,
  setInputValue,
  inputValue,
  setCurrent,
  currentPage,
}) => {
  const postHandler = () => {
    if (page?.innerPage?.name) setCurrent(page.innerPage.name);
    if (page?.name == Pages.photo) return AdminApi.addPhoto(inputValue);
  };

  return (
    <div className={classes.adminGeneralBlock}>
      <h3 className={classes.adminTitle}>{page?.title}</h3>
      <div className={classes.adminContent}>
        <AddMedia
          currentPage={currentPage}
          page={page!}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
        <div className={classes.adminFields}>
          <div className={classes.adminInputs}>
            {page?.fields &&
              page?.fields.map((field) => {
                return (
                  <AdminInput
                    key={field.title}
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                    page={page}
                    title={field.title}
                    name={field.name}
                  />
                );
              })}
            {page?.viewersRange && (
              <AdminInput
                title="Просмотры"
                name="views"
                inputValue={inputValue}
                setInputValue={setInputValue}
                page={page}
              />
            )}
          </div>
          <button onClick={postHandler} className={classes.btn}>
            Опубликовать
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminGeneral;
