import React, { FC, useState } from "react";

import classes from "./AdminSelect.module.css";
import {
  AdminPageTypes,
  PhotoCard,
  VideoCard,
} from "../../../types/adminPage/adminPage";

interface AdminSelectProps {
  options: any;
  title: string;
  name: string;
  required?: boolean;
  errorMessage: string;
  inputValue: PhotoCard | VideoCard;
  inputHandler?: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
}

const AdminSelect: FC<AdminSelectProps> = ({
  options,
  title,
  name,
  required,
  errorMessage,
  inputValue,
  inputHandler,
}) => {
  const [focused, setFocused] = useState<boolean>(false);
  const handleFocus = () => {
    setFocused(!focused);
  };
  return (
    <div className={classes.inputBlock}>
      <label className={classes.inputTitle} htmlFor={name}>
        {title}
      </label>
      <select
        onBlur={handleFocus}
        autoFocus={focused}
        required={required}
        className={classes.adminInput}
        name={name}
        onChange={inputHandler}
        defaultValue={""}
      >
        <option hidden disabled value={""}></option>
        {options.map((option: any) => {
          return (
            <option value={option.id} key={option.id}>
              {option.name}
            </option>
          );
        })}
      </select>
      {focused && <span className={classes.errorMessage}>{errorMessage}</span>}
    </div>
  );
};

export default AdminSelect;
