import React, { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

import classes from './AdminSidebar.module.css';
import {
  ADMIN_ADVERTISING,
  ADMIN_CONTACTS,
  ADMIN_ESTABLISHMENT,
  ADMIN_PHOTO,
  ADMIN_VIDEO,
  ADMIN_EDIT,
} from '../../../../utils/path';
// import { ReactComponent as Photo } from "../../../../assets/icons/adminPanel/pic.svg";
// import { ReactComponent as Video } from "../../../../assets/icons/adminPanel/video.svg";
// import { ReactComponent as Advertising } from "../../../../assets/icons/adminPanel/advertising.svg";
// import { ReactComponent as Institution } from "../../../../assets/icons/adminPanel/Institution.svg";
// import { ReactComponent as Contact } from "../../../../assets/icons/adminPanel/contact.svg";
import photo from '../../../../assets/icons/adminPanel/pic.svg';
import video from '../../../../assets/icons/adminPanel/video.svg';
import advertising from '../../../../assets/icons/adminPanel/advertising.svg';
import institution from '../../../../assets/icons/adminPanel/Institution.svg';
import contact from '../../../../assets/icons/adminPanel/contact.svg';
import edit from '../../../../assets/icons/adminPanel/edit.png';

interface AdminSidebarProps {
  // setCurrent: (string: string) => void;
  // current: string;
}

const navs = [
  {
    title: 'Фото',
    path: ADMIN_PHOTO,
    icon: photo,
  },
  {
    title: 'Видео',
    path: ADMIN_VIDEO,
    icon: video,
  },
  {
    title: 'Реклама',
    path: ADMIN_ADVERTISING,
    icon: advertising,
  },
  {
    title: 'Заведение',
    path: ADMIN_ESTABLISHMENT,
    icon: institution,
  },
  {
    title: 'Контакты',
    path: ADMIN_CONTACTS,
    icon: contact,
  },
  {
    title: 'Изменить',
    path: ADMIN_EDIT,
    icon: edit,
  },
];

const AdminSidebar: FC<AdminSidebarProps> = () => {
  const location = useLocation();
  return (
    // <div className={classes.sideBar}>
    //   <ul>
    //     {navs.map((nav) => (
    //       <Link to={nav.path} key={nav.path}>
    //         <li
    //           className={
    //             location.pathname == nav.path
    //               ? classes.sideBarItemActive
    //               : classes.sideBarItem
    //           }
    //         >
    //           <img src={nav.icon} /> {nav.title}
    //         </li>
    //       </Link>
    //     ))}
    //   </ul>
    //
    //
    // </div>

    <div className={classes.sideBar}>
      {/*<a className="s-sidebar__trigger" href="#0">*/}
      {/*  <i className="fa fa-bars"></i>*/}
      {/*</a>*/}

      <nav className={classes.sideBarNav}>
        <ul>
          {navs.map((nav) => (
            <Link
              to={nav.path}
              className={classes.sideBarNavLink}
              key={nav.path}
            >
              <li
                className={
                  location.pathname == nav.path
                    ? classes.sideBarItemActive
                    : classes.sideBarItem
                }
              >
                <img src={nav.icon} />
                <em>{nav.title}</em>
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default AdminSidebar;
