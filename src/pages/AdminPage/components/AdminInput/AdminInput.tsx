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
  page: IPageBody;
  title?: string;
  name?: string;
  inputValue: AdminPageTypes | object;
  setInputValue: (prevInputs: AdminPageTypes | object) => void;
  color?: primaryColor;
  inputHandler: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  // icon: SVGElement;
}

const AdminInput: FC<AdminInputProps> = ({
  page,
  setInputValue,
  inputValue,
  inputHandler,
  ...props
}) => {
  const type = props.title?.toLowerCase();

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
        {props.title || page.title}
      </label>
      {type == "о нас" || type == "описание" || type == "о заведении" ? (
        <textarea
          id={props.name}
          onChange={inputHandler}
          name={props.name}
          className={`${classes.textArea} ${classes.adminInput}`}
        />
      ) : (
        <input
          id={props.name}
          name={props.name}
          value={inputValue[props.name as keyof AdminPageTypes] || ""}
          onChange={inputHandler}
          className={classes.adminInput}
          {...props}
        />
      )}
    </div>
  );
};

export default AdminInput;
