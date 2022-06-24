import React, { FC } from "react";

import classes from "./AdminGeneral.module.css";
import { ReactComponent as PhotoIcon } from "../../../../assets/adminPage/addPic.svg";
import { ReactComponent as VideoIcon } from "../../../../assets/adminPage/addVideo.svg";
import { IPage, IPageBody } from "../../../../types/adminPage/adminPage";
import AdminInput from "../AdminInput/AdminInput";
import AdminRange from "../AdminRange/AdminRange";

interface AdminGeneralProps {
  page?: IPageBody;
}

const AdminGeneral: FC<AdminGeneralProps> = ({ page }) => {
  return (
    <div className={classes.adminGeneralBlock}>
      <h3 className={classes.adminTitle}>{page?.title}</h3>
      <div className={classes.adminContent}>
        <div className={classes.adminAddBlock}>
          <div className={classes.adminAdd}>
            <i className={classes.icon}>
              {page?.add == "photo" ? <PhotoIcon /> : <VideoIcon />}
            </i>
            <h4 className={classes.adminAddTitle}>
              {page?.add == "photo" ? "Добавить картинки" : "Добавить видео"}
            </h4>
          </div>
          <AdminInput title="Вставить ссылку" />
        </div>

        <div className={classes.adminFields}>
          {page?.fields.map((field) => {
            return <AdminInput title={field.title} />;
          })}
          <AdminRange />
        </div>
      </div>
    </div>
  );
};

export default AdminGeneral;
