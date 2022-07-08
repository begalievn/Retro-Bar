import React, { FC } from "react";
import { Link, useLocation } from "react-router-dom";

import classes from "../NavItems/NavItems.module.css";

interface ItemProps {
  className: string;
  path: string;
  title: string;
  onClick?: () => void;
}

const NavItem: FC<ItemProps> = ({ path, className, title, onClick }) => {
  const location = useLocation();
  return (
    <li
      className={`${className} ${
        location.pathname === path &&
        location.pathname !== "/" &&
        classes.activeItem
      }`}
      onClick={onClick}
    >
      <Link to={path}>{title}</Link>
    </li>
  );
};

export default NavItem;
