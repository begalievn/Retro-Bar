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
import DropFileInput from "../DropFileInput/DropFileInput";
import useDebounce from "../../../../hooks/useDebounce";

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
  handler,
}) => {


  const inputHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e.target.toString().includes("TextArea")) {
      e.target.style.height = e.target.scrollHeight + "px";
    }
    if (e.target.name == "establishmentId") {
    } else if (e.target.name == "photographerId") {
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
          <DropFileInput
            type={page?.add!}
            children={"Добавить видео"}
            setInputValue={setInputValue}
          />
        ) : (
          <DropFileInput
            type={page?.add!}
            children={"Добавить картинки"}
            setInputValue={setInputValue}
          />
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminGeneral;
