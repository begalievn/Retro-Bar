import React, {useEffect, useState} from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import classes from "./Header.module.css";
import { ReactComponent as LogoIcon } from "../../assets/Header/logo.svg";

import BurgerMenu from "./components/BurgerMenu/BurgerMenu";
import { SearchBtn, InputSearch } from "../../UI";
import { someClasses } from "../../utils/someClasses";

const Header = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [inputVisible, setInputVisible] = useState<boolean>(false);
  const history = useNavigate();
  const location = useLocation();

  const isHomePage = location.pathname !== "/" ? "pointer" : "initial";

  useEffect(()=>{
    console.log(inputVisible);
  })

  if (isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }

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
            {navItems.map((item) => {
              return (
                <li className={classes.headerNavItem} key={item.path}>
                  <Link to={item.path}>{item.title}</Link>
                </li>
              );
            })}
            <SearchBtn onClick={() => setInputVisible(!inputVisible)} />
          </ul>

          <div
            className={someClasses([
              classes.headerMenuBtn,
              `${isOpen ? classes.activeMenu : ""} `,
            ])}
            onClick={() => setOpen(!isOpen)}
          >
            <span></span>
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
