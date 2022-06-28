import React, { FC, useState } from "react";

import { NavItem } from "../index";
import { INavItems } from "../../../../types/headerTypes/headerTypes";

// import classes from "../../Header.module.css";
import classes from "./NavItems.module.css";
interface NavItemsProps {
  navItems: INavItems[];
  onClick?: () => void;
}

const NavItems: FC<NavItemsProps> = ({ navItems, onClick }) => {
  const [isActiveItem, setIsActiveItem] = useState("");

  return (
    <>
      {navItems.map((item) => {
        return (
          <NavItem
            isActive={isActiveItem}
            setIsActiveItem={setIsActiveItem}
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
