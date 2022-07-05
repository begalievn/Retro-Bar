import React, { FC } from "react";

import classes from "./Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  size?: string;
}

const sizes = ["small", "medium", "big"];

const Button: FC<ButtonProps> = ({ children, onClick, size }) => {
  const checkSize = size && sizes.includes(size) ? size : sizes[0];

  return (
    <>
      <button
        onClick={onClick}
        className={`${classes.btn} ${(checkSize && classes[checkSize]) || ""}`}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
