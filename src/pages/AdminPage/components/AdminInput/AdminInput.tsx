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
  errorMessage?: string;
  required?: boolean;
  // icon: SVGElement;
}

const AdminInput: FC<AdminInputProps> = ({
  page,
  inputValue,
  inputHandler,
  type = "input",
  name,
  title,
  color,
  errorMessage,
  ...props
}) => {
  const [focused, setFocused] = useState<boolean>(false);

  const handleFocus = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFocused(!focused);
  };

  return (
    <div className={classes.inputBlock}>
      <label
        // className={
        //   title?.toLowerCase() == "вставить ссылку"
        //     ? classes.inputLinkTitle
        //     : classes.inputTitle
        // }
        // style={{ color: `${color && color}` }}
        htmlFor={name}
      >
        {/*<i>{icon}</i>*/}
        {title}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        required={props.required}
        value={inputValue[name as keyof AdminPageTypes] || ""}
        onChange={inputHandler}
        className={classes.adminInput}
        onBlur={handleFocus}
        autoFocus={focused}
      />
      {focused && <span className={classes.errorMessage}>{errorMessage}</span>}
    </div>
  );
};

export default AdminInput;
