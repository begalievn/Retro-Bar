import React, { FC, useState } from "react";

import classes from "./AdminInput.module.css";
import {
  AdminPageTypes,
  IPageBody,
} from "../../../../types/adminPage/adminPage";

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
  pattern?: string;
  icon?: React.ReactNode | JSX.Element;
  search?: boolean;
  searchList?: any;
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
  search,
  searchList,
  ...props
}) => {
  const [focused, setFocused] = useState<boolean>(false);
  const handleFocus = () => {
    setFocused(!focused);
  };

  return (
    <div className={classes.inputBlock}>
      <div className={classes.labelBlock}>
        <label
          className={classes.inputTitle}
          style={{ color: `${color}` }}
          htmlFor={name}
        >
          {title}
        </label>
        {props.icon && <i>{props.icon}</i>}
      </div>

      <input
        type={type}
        name={name}
        pattern={props.pattern}
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
