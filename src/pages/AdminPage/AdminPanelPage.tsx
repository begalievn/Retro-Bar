import { useState } from "react";
import style from "./AdminPage.module.css";
import AdminSidebar from "./AdminSidebar";
import AdminValue from "./AdminValue";


const AdminPanelPage = () => {
  const [current,setCurrent] = useState<string>('photo')

  



  return (
    <div className={style.container}>
      <AdminSidebar setCurrent={setCurrent} />
     <AdminValue current={current} />
    </div>
  );
};

export default AdminPanelPage;