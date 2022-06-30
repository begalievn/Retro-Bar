import React, { FC } from "react";
import { Link, useLocation } from "react-router-dom";

import classes from "./AdminSidebar.module.css";

import {
  ADMIN_ADVERTISING,
  ADMIN_CONTACTS,
  ADMIN_ESTABLISHMENT,
  ADMIN_PHOTO,
  ADMIN_VIDEO,
} from "../../../../utils/path";
import photo from "../../../../assets/icons/adminPanel/pic.svg";
import video from "../../../../assets/icons/adminPanel/video.svg";
import advertising from "../../../../assets/icons/adminPanel/advertising.svg";
import institution from "../../../../assets/icons/adminPanel/Institution.svg";
import contact from "../../../../assets/icons/adminPanel/contact.svg";

interface AdminSidebarProps {
  // setCurrent: (string: string) => void;
  // current: string;
}

const navs = [
  {
    title: "Фото",
    path: ADMIN_PHOTO,
    icon: photo,
  },
  {
    title: "Видео",
    path: ADMIN_VIDEO,
    icon: video,
  },
  {
    title: "Реклама",
    path: ADMIN_ADVERTISING,
    icon: advertising,
  },
  {
    title: "Заведение",
    path: ADMIN_ESTABLISHMENT,
    icon: institution,
  },
  {
    title: "Контакты",
    path: ADMIN_CONTACTS,
    icon: contact,
  },
];

const AdminSidebar: FC<AdminSidebarProps> = () => {
  const location = useLocation();
  return (
    <div className={classes.sideBar}>
      <ul>
        {navs.map((nav) => (
          <Link to={nav.path} key={nav.path} >
            <li
              className={
                location.pathname == nav.path
                  ? classes.sideBarItemActive
                  : classes.sideBarItem
              }
            >
              <img src={nav.icon} /> {nav.title}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default AdminSidebar;
