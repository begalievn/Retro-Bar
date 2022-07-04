import React, { FC } from "react";
import classes from "../AdminInput/AdminInput.module.css";

interface AdminTextareaProps {
  name: string;
  inputHandler: () => void;
}

const AdminTextarea: FC<AdminTextareaProps> = ({ name, inputHandler }) => {
  return (
    <>
      <textarea
        id={name}
        onChange={inputHandler}
        name={name}
        className={`${classes.textArea} ${classes.adminInput}`}
      />
    </>
  );
};

export default AdminTextarea;
