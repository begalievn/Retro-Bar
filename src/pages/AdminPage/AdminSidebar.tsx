import { FC } from "react";
import style from "./AdminPage.module.css";


interface AdminSidebarProps {
setCurrent: (string:string) => void
}

const AdminSidebar:FC<AdminSidebarProps> = ({setCurrent}) => {
const navs = [
  {
    title: 'Фото',
    path: 'photo'
  },
  {
    title: 'Видео',
    path: 'video'
  },
  {
    title: 'Реклама',
    path: 'advertising'
  },
  {
    title: 'Заведение',
    path: 'establishment'
  },
  {
    title: 'Контакты',
    path: 'contacts'
  },
]


  return (
    <div className={style.sideBar}>
      <ul>
        {
          navs.map(nav=>{
            return <li onClick={() => setCurrent(nav.path)} key={nav.path}>{nav.title}</li>
          })
        }
      </ul>
    </div>
  );
};

export default AdminSidebar;