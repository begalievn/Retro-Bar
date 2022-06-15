import React, { FC } from "react";

import { NavItem } from "../index";
import { INavItems } from "../../../../types/headerTypes/headerTypes";

// import classes from "../../Header.module.css";
import classes from "./NavItems.module.css";
interface NavItemsProps {
  navItems: INavItems[];
  onClick?: () => void;
}

const NavItems: FC<NavItemsProps> = ({ navItems, onClick }) => {
  return (
    <>
      {navItems.map((item) => {
        return (
          <NavItem
            onClick={onClick}
            className={classes.headerNavItem}
            path={item.path}
            title={item.title}
            key={item.path}
          />
        );
      })}
    </>
  );
};

export default NavItems;
