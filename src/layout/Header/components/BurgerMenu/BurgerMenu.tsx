import React, { FC } from "react";
import { Link } from "react-router-dom";

import classes from "./BurgerMenu.module.css";
import InputSearch from "../../../../UI/InputSearch/InputSearch";
import { ReactComponent as Instagram } from "../../../../assets/Header/social/instagram.svg";
import { ReactComponent as Telegram } from "../../../../assets/Header/social/telegram.svg";
import { ReactComponent as Youtube } from "../../../../assets/Header/social/youtube.svg";
import { ReactComponent as Mail } from "../../../../assets/Header/social/mail.svg";

interface INavItems {
  title: string;
  path: string;
}

interface BurgerMenuProps {
  navItems: INavItems[];
  setOpen: (value: boolean) => void;
}

const BurgerMenu: FC<BurgerMenuProps> = ({ navItems, setOpen }) => {
  const social = [
    {
      link: "#",
      icon: <Instagram />,
    },
    {
      link: "#",
      icon: <Telegram />,
    },
    {
      link: "#",
      icon: <Youtube />,
    },
    {
      link: "#",
      icon: <Mail />,
    },
  ];

  return (
    <>
      <div className={classes.burgerPopUp}>
        <div className={classes.navWrapper}>
          <nav className={classes.burgerNav}>
            <InputSearch placeholder="поиск" />
            <ul className={classes.burgerNavLinks}>
              {navItems.map((item) => {
                return (
                  <li key={item.path} onClick={() => setOpen(false)}>
                    <Link to={item.path}>{item.title}</Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className={classes.socialBlock}>
            <h4 className={classes.socialBlockTitle}>Мы в социальных сетях:</h4>

            <ul className={classes.socialLinks}>
              {social.map((item, index) => {
                return (
                  <li key={index}>
                    <a href={item.link}>{item.icon}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default BurgerMenu;
