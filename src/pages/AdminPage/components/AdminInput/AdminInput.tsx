import React, { FC, useState } from "react";

import classes from "./AdminInput.module.css";
import { IPageBody } from "../../../../types/adminPage/adminPage";

interface AdminInputProps {
  page: IPageBody;
  title?: string;
  name?: string;
}
interface IState {
  [key: string]: string;
}
const AdminInput: FC<AdminInputProps> = ({ page, ...props }) => {
  const [inputValue, setInputValue] = useState({});

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue((prevInputs) => ({
      ...prevInputs,
      [e.target.name]: e.target.value,
    }));
  };

  console.log(inputValue);

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
      <input
        name={props.name}
        id={props.name}
        onChange={inputHandler}
        className={classes.AdminInput}
      />
    </div>
  );
};

export default AdminInput;
