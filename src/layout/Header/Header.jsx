import React, { useState } from "react";
import { Link } from "react-router-dom";

import classes from "./Header.module.css";
import { ReactComponent as LogoIcon } from "../../assets/Header/logo.svg";

import BurgerMenu from "./components/BurgerMenu/BurgerMenu";
import SearchBtn from "../../UI/SearchBtn/SearchBtn";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const navItems = [
    {
      title: "Фото",
      path: "/photo",
    },
    {
      title: "Видео",
      path: "/video",
    },
    {
      title: "Заведение",
      path: "/institution",
    },
    {
      title: "События",
      path: "/events",
    },
    {
      title: "Новости",
      path: "/news",
    },
    {
      title: "Контакты",
      path: "/contacts",
    },
  ];

  return (
    <header className={classes.headerWrapper}>
      <div className={classes.headerBlock}>
        <div className={classes.headerLogo}>
          <a href="#">
            <LogoIcon width="108px" />
          </a>
        </div>
        <nav>
          <ul className={classes.headerNav}>
            {navItems.map((item) => {
              return (
                <li className={classes.headerNavItem} key={item.path}>
                  <Link to={item.path}>{item.title}</Link>
                </li>
              );
            })}
            {/*<li className={classes.headerNavItem}>*/}
            {/*  <Link to={"/photo"}>Фото</Link>*/}
            {/*</li>*/}
            {/*<li className={classes.headerNavItem}>*/}
            {/*  <Link to={"/video"}>Видео</Link>*/}
            {/*</li>*/}
            {/*<li className={classes.headerNavItem}>*/}
            {/*  <Link to={"/institution"}>Заведение</Link>*/}
            {/*</li>*/}
            {/*<li*/}
            {/*  className={*/}
            {/*    classes.headerNavItem*/}
            {/*  }*/}
            {/*>*/}
            {/*  <Link to={"/events"}>События</Link>*/}
            {/*</li>*/}
            {/*<li className={classes.headerNavItem}>*/}
            {/*  <Link to={"/news"}>Новости</Link>*/}
            {/*</li>*/}
            {/*<li className={classes.headerNavItem}>*/}
            {/*  <Link to={"/contacts"}>Контакты</Link>*/}
            {/*</li>*/}
            <SearchBtn />
          </ul>

          <div
            className={[
              classes.headerMenuBtn,
              `${isOpen ? classes.activeMenu : ""} `,
            ].join(" ")}
            onClick={() => setOpen(!isOpen)}
          >
            <span></span>
          </div>
        </nav>
        {isOpen && <BurgerMenu isOpen={isOpen} navItems={navItems} setOpen={setOpen} />}
      </div>
    </header>
  );
};

export default Header;
