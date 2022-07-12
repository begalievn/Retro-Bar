import React, { FC, useState } from "react";

import classes from "./AdminSelect.module.css";
import {
  AdminPageTypes,
  PhotoCard,
  VideoCard,
} from "../../../../types/adminPage/adminPage";

interface AdminSelectProps {
  options: any;
  title: string;
  name: string;
  required?: boolean;
  errorMessage: string;
  color?: string;
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
  inputHandler,
  color,
}) => {
  const [focused, setFocused] = useState<boolean>(false);
  const handleFocus = () => {
    setFocused(!focused);
  };
  return (
    <div className={classes.inputBlock}>
      <label
        className={classes.inputTitle}
        htmlFor={name}
        style={{ color: `${color}` }}
      >
        {title}
      </label>
      <select
        onBlur={handleFocus}
        autoFocus={focused}
        required={required}
        className={classes.adminInput}
        name={name}
        onChange={inputHandler}
        defaultValue={"пусто"}
      >
        <option hidden disabled selected value={"пусто"}>
          Выберите {title}
        </option>
        {options.length &&
          options.map((option: any) => {
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
