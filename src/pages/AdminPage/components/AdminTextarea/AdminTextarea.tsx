import React, { FC } from "react";
import classes from "../AdminInput/AdminInput.module.css";

interface AdminTextareaProps {
  name: string;
  title: string;

  inputHandler?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const AdminTextarea: FC<AdminTextareaProps> = ({
  name,
  inputHandler,
  title,
}) => {
  return (
    <div className={classes.inputBlock}>
      <label className={classes.inputTitle} htmlFor={name}>
        {title}
      </label>
      <textarea
        id={name}
        onChange={inputHandler}
        name={name}
        className={`${classes.textArea} ${classes.adminInput}`}
      />
    </div>
  );
};

export default AdminTextarea;
