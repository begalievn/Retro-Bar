import React, { FC } from "react";
import { Link } from "react-router-dom";
interface ItemProps {
  className: string;
  path: string;
  title: string;
  onClick?: () => void
}

const NavItem: FC<ItemProps> = ({ path, className, title,onClick }) => {
  return (
    <li className={className} onClick={onClick}>
      <Link to={path}>{title}</Link>
    </li>
  );
};

export default NavItem;
