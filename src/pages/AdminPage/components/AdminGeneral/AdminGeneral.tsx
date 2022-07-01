import React, { FC, useEffect, useState } from "react";

import classes from "./AdminGeneral.module.css";
import {
  AdminPageTypes,
  IPageBody,
  Pages,
} from "../../../../types/adminPage/adminPage";
import AdminInput from "../AdminInput/AdminInput";
import AddMedia from "../AddMedia/AddMedia";
import SocialComponent from "../SocialComponent/SocialComponent";

interface AdminGeneralProps {
  page?: IPageBody;
  postHandler: () => void;
  inputValue: AdminPageTypes | object;
  setInputValue: (some: AdminPageTypes | object) => void;
  handler?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const AdminGeneral: FC<AdminGeneralProps> = ({
  page,
  setInputValue,
  inputValue,
  postHandler,
  handler,
}) => {
  const inputHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e.target.toString().includes("TextArea")) {
      e.target.style.height = e.target.scrollHeight + "px";
    }

    setInputValue((prevInputs: AdminPageTypes) => ({
      ...prevInputs,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div className={classes.adminGeneralBlock}>
      <h3 className={classes.adminTitle}>{page?.title}</h3>
      <div className={classes.adminContent}>
        {page?.add == "video" ? (
          <AddMedia
            inputHandler={handler ? handler : inputHandler}
            page={page!}
            inputValue={inputValue}
            setInputValue={setInputValue}
          >
            Добавить видео
          </AddMedia>
        ) : (
          <AddMedia
            inputHandler={handler ? handler : inputHandler}
            page={page!}
            inputValue={inputValue}
            setInputValue={setInputValue}
          >
            Добавить картинки
          </AddMedia>
        )}

        <div className={classes.adminFields}>
          <div className={classes.adminInputs}>
            {page?.fields &&
              page?.fields.map((field) => {
                return (
                  <AdminInput
                    type={field.type}
                    inputHandler={handler ? handler : inputHandler}
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
                inputHandler={handler ? handler : inputHandler}
                title="Просмотры"
                name="views"
                inputValue={inputValue}
                setInputValue={setInputValue}
                page={page}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminGeneral;
