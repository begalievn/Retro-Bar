import React, { FC, useEffect, useState } from "react";

import classes from "./AdminInput.module.css";
import { IPageBody } from "../../../../types/adminPage/adminPage";

interface AdminInputProps {
  page: IPageBody;
  title?: string;
  name?: string;
  inputValue: any;
  setInputValue: (some: any) => void;
}
interface IState {
  [key: string]: string;
}
const AdminInput: FC<AdminInputProps> = ({
  page,
  setInputValue,
  inputValue,
  ...props
}) => {
  useEffect(() => {
  }, []);
  const inputHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e.target.toString().includes("TextArea")) {
      e.target.style.height = e.target.scrollHeight + "px";
    }
    setInputValue((prevInputs: any) => ({
      ...prevInputs,
      [e.target.name]: e.target.value,
    }));
  };

  const type = props.title?.toLowerCase();

  return (
    <div className={classes.inputBlock}>
      <label
        className={
          props.title?.toLowerCase() == "вставить ссылку"
            ? classes.inputLinkTitle
            : classes.inputTitle
        }
        htmlFor={props.name}
      >
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
          value={inputValue[props.name!] || ""}
          onChange={inputHandler}
          className={classes.adminInput}
          {...props}
        />
      )}
    </div>
  );
};

export default AdminInput;
