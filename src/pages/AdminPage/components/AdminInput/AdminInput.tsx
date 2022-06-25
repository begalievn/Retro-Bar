import React, { FC, useState } from "react";

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
      <h4
        className={
          props.title?.toLowerCase() == "вставить ссылку"
            ? classes.inputLinkTitle
            : classes.inputTitle
        }
      >
        {props.title || page.title}
      </h4>
      {type == "о нас" || type == "описание" || type == "о заведении" ? (
        <textarea
          onChange={inputHandler}
          name={props.name}
          id="input-textarea"
          className={`${classes.fakeInput} ${classes.adminInput}`}
        />
      ) : (
        <input
          name={props.name}
          value={inputValue[props.name!] || ""}
          onChange={inputHandler}
          className={classes.adminInput}
        />
      )}
    </div>
  );
};

export default AdminInput;
