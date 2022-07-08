import React, { FC } from "react";

import classes from "./Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  size?: string;
  type?: btnTypes;
}

type btnTypes = "submit" | "reset";

const sizes = ["small", "medium", "big"];

const Button: FC<ButtonProps> = ({ children, onClick, size, type }) => {
  const checkSize = size && sizes.includes(size) ? size : sizes[0];

  return (
    <>
      <button
        type={type}
        onClick={onClick}
        className={`${classes.btn} ${(checkSize && classes[checkSize]) || ""}`}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
