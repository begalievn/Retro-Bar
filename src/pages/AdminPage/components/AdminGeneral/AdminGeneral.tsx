import React, { FC, useState } from "react";

import classes from "./AdminGeneral.module.css";
import { ReactComponent as PhotoIcon } from "../../../../assets/adminPage/addPic.svg";
import { ReactComponent as VideoIcon } from "../../../../assets/adminPage/addVideo.svg";
import { IPage, IPageBody } from "../../../../types/adminPage/adminPage";
import AdminInput from "../AdminInput/AdminInput";
import AdminRange from "../AdminRange/AdminRange";

interface AdminGeneralProps {
  page?: IPageBody;
  inputValue: any;
  setInputValue: (some: any) => void;
}

const AdminGeneral: FC<AdminGeneralProps> = ({
  page,
  setInputValue,
  inputValue,
}) => {
  return (
    <div className={classes.adminGeneralBlock}>
      <h3 className={classes.adminTitle}>{page?.title}</h3>
      <div className={classes.adminContent}>
        <div
          className={classes.adminAddBlock}
          style={{ width: `${!page?.add ? "90%" : "auto"}` }}
        >
          <div
            className={`${classes.adminAdd} ${
              !page?.add && classes.adminAddRow
            }`}
          >
            <i className={classes.icon}>
              {page?.add == "video" ? <VideoIcon /> : <PhotoIcon />}
            </i>
            <h4 className={classes.adminAddTitle}>
              {page?.add == "video" ? "Добавить видео" : "Добавить картинки"}
            </h4>
          </div>
          <AdminInput
            inputValue={inputValue}
            setInputValue={setInputValue}
            page={page!}
            title="Вставить ссылку"
            name="link"
          />
        </div>
        {page?.fields?.length ? (
          <div className={classes.adminFields}>
            {page?.fields.map((field) => {
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
              <AdminRange
                setInputValue={setInputValue}
                inputValue={inputValue}
              />
            )}
            {page?.btn && <button className={classes.btn}>Опубликовать</button>}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default AdminGeneral;
