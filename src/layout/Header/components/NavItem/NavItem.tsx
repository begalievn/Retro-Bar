import React, { FC } from "react";
import { Link, useLocation } from "react-router-dom";

import classes from "../NavItems/NavItems.module.css";

interface ItemProps {
  className: string;
  path: string;
  title: string;
  onClick?: () => void;
  isActive: string;
  setIsActiveItem: (str: string) => void;
}

const NavItem: FC<ItemProps> = ({
  path,
  className,
  title,
  onClick,
  isActive,
  setIsActiveItem,
}) => {
  const location = useLocation();
  return (
    <li
      className={`${className} ${
        isActive === title && location.pathname !== "/" && classes.activeItem
      }`}
      onClick={onClick ? onClick : () => setIsActiveItem(title)}
    >
      <Link to={path}>{title}</Link>
    </li>
  );
};

export default NavItem;
