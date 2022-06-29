import React, { FC, useEffect, useState } from "react";

import classes from "./AdminGeneral.module.css";
import { IPageBody, Pages } from "../../../../types/adminPage/adminPage";
import AdminInput from "../AdminInput/AdminInput";
import AddPhoto from "../AddMedia/AddPhoto";
import AddVideo from "../AddVideo/AddVideo";
import ContactsComponent from "../ContactsComponent/ContactsComponent";
import SocialComponent from "../SocialComponent/SocialComponent";

interface AdminGeneralProps {
  page?: IPageBody;
  postHandler: () => void;
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
  postHandler,
}) => {
  console.log(currentPage);
  return (
    <div className={classes.adminGeneralBlock}>
      <h3 className={classes.adminTitle}>{page?.title}</h3>
      <div className={classes.adminContent}>
        {page?.add == "video" ? (
          <AddVideo
            currentPage={currentPage}
            page={page!}
            inputValue={inputValue}
            setInputValue={setInputValue}
          />
        ) : (
          <AddPhoto
            currentPage={currentPage}
            page={page!}
            inputValue={inputValue}
            setInputValue={setInputValue}
          />
        )}

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
        </div>
      </div>
      {currentPage == Pages.contacts && (
        <SocialComponent
          page={page!}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
      )}
    </div>
  );
};

export default AdminGeneral;
