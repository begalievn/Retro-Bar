import React, { FC, SVGProps, useEffect, useState } from "react";

import classes from "./AdminInput.module.css";
import {
  AdminPageTypes,
  IPageBody,
  VideoCard,
} from "../../../../types/adminPage/adminPage";
import { isValidUrl } from "../../../../utils/helpers/validUrl";

type primaryColor = "white" | "black";

interface AdminInputProps {
  page?: IPageBody;
  title?: string;
  name?: string;
  type?: string;
  inputValue: AdminPageTypes | object;
  color?: primaryColor;
  inputHandler?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  // icon: SVGElement;
}

const AdminInput: FC<AdminInputProps> = ({
  page,
  inputValue,
  inputHandler,
  type = "input",
  ...props
}) => {
  return (
    <div className={classes.inputBlock}>
      <label
        className={
          props.title?.toLowerCase() == "вставить ссылку"
            ? classes.inputLinkTitle
            : classes.inputTitle
        }
        style={{ color: `${props.color && props.color}` }}
        htmlFor={props.name}
      >
        {/*<i>{props.icon}</i>*/}
        {props.title}
      </label>
      <input
        id={props.name}
        type={type}
        name={props.name}
        value={inputValue[props.name as keyof AdminPageTypes] || ""}
        onChange={inputHandler}
        className={classes.adminInput}
        {...props}
      />
    </div>
  );
};

export default AdminInput;
