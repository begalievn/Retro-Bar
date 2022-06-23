import React, { useState } from "react";

import classes from "./AdminInput.module.css";

const AdminInput = (props: React.HTMLProps<HTMLInputElement>) => {
  const [inputValue, setInputValue] = useState({});

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue({
      ...inputValue,
      [e.target.name || "input"]: e.target.value,
    });
  };

  console.log(inputValue);

  return (
    <div className={classes.inputBlock}>
      <h4 className={classes.inputTitle}>{props.title}</h4>
      <input
        onChange={inputHandler}
        className={classes.AdminInput}
        {...props}
      />
    </div>
  );
};

export default AdminInput;
