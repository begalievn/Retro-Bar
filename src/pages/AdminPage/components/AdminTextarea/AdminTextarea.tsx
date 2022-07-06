import React, { FC, useState } from "react";
import classes from "../AdminInput/AdminInput.module.css";

interface AdminTextareaProps {
  name: string;
  title: string;
  required?: boolean;
  errorMessage?: string;
  inputHandler?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const AdminTextarea: FC<AdminTextareaProps> = ({
  name,
  inputHandler,
  title,
  required,
  errorMessage,
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
      <textarea
        required={required}
        id={name}
        onChange={inputHandler}
        name={name}
        className={`${classes.textArea} ${classes.adminInput}`}
        onBlur={handleFocus}
        autoFocus={focused}
      />
      {focused && <span className={classes.errorMessage}>{errorMessage}</span>}
    </div>
  );
};

export default AdminTextarea;
