import { FC } from "react";
import style from "./AdminPage.module.css";

import  photo  from "../../assets/icons/adminPanel/pic.svg";
import  video  from "../../assets/icons/adminPanel/video.svg";
import  advertising  from "../../assets/icons/adminPanel/advertising.svg";
import  institution  from "../../assets/icons/adminPanel/Institution.svg";
import  contact  from "../../assets/icons/adminPanel/contact.svg";


interface AdminSidebarProps {
setCurrent: (string:string) => void,
current:string
}

const AdminSidebar:FC<AdminSidebarProps> = ({setCurrent,current}) => {
const navs = [
  {
    title: 'Фото',
    path: 'photo',
    icon: photo 
  },
  {
    title: 'Видео',
    path: 'video',
    icon: video
  },
  {
    title: 'Реклама',
    path: 'advertising',
    icon: advertising
  },
  {
    title: 'Заведение',
    path: 'establishment',
    icon: institution
  },
  {
    title: 'Контакты',
    path: 'contacts',
    icon: contact
  },
]


  return (
    <div className={style.sideBar}>
      
      <ul>
        {
          navs.map(nav=>(
           
            <li className={current == nav.path ? style.sideBarItemActive : style.sideBarItem }
             onClick={() => setCurrent(nav.path)}
              key={nav.path}><img src={nav.icon}/> {nav.title}
              </li>
          ))
        }
      </ul>
    </div>
  );
};

export default AdminSidebar;