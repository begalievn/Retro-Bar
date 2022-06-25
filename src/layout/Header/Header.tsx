import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import classes from "./Header.module.css";
import { ReactComponent as LogoIcon } from "../../assets/header/logo.svg";
import { BurgerMenu, NavItem, NavItems } from "./components";
import { SearchBtn, InputSearch } from "../../UI";
import { someClasses } from "../../utils/someClasses";
import { INavItems } from "../../types/headerTypes/headerTypes";
import { useAppDispatch } from "../../app/hooks";
import { logOut } from "../../store/AuthFunc";

const navItems: INavItems[] = [
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

const Header = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [inputVisible, setInputVisible] = useState<boolean>(false);
  const history = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname !== "/" ? "pointer" : "initial";
  const dispatch = useAppDispatch();

  if (isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }
  //
  // const logOutBtn = ()=>{
  //   dispatch(logOut())
  //   history('/')
  // }

  return (
    <header className={classes.headerWrapper}>
      <div className={classes.headerBlock}>
        <div
          className={classes.headerLogo}
          onClick={() => {
            isHomePage && (history("/"), setOpen(false));
          }}
          style={{
            cursor: `${isHomePage}`,
          }}
        >
          <LogoIcon width="108px" />
        </div>

        <nav>
          <ul className={classes.headerNav}>
            {/*{localStorage.getItem('token') ? */}
            {/*<button className={classes.logOut_btn} onClick={()=>logOutBtn()}>Выйти</button>*/}
            {/* :*/}
            <NavItems navItems={navItems} />
          </ul>
          <SearchBtn
            onClick={() => setInputVisible(!inputVisible)}
            className={classes.navSearchBtn}
          />
          <div
            className={`${classes.headerMenuBtn}
             ${isOpen ? classes.activeMenu : ""}`}
            onClick={() => setOpen(!isOpen)}
          >
            <span />
          </div>
        </nav>

        {isOpen && <BurgerMenu navItems={navItems} setOpen={setOpen} />}
        {inputVisible && (
          <div className={classes.headerSearch}>
            <InputSearch placeholder="поиск" />
          </div>
        )}
      </div>
      <div className={classes.backDrop}></div>
    </header>
  );
};

export default Header;
