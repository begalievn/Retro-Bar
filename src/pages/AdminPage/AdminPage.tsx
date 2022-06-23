import React, { useState } from "react";

import classes from "./AdminPage.module.css";
import AdminSidebar from "./components/AdminSidebar/AdminSidebar";
import AdminInput from "./components/AdminInput/AdminInput";

const AdminPage = () => {
  const [current, setCurrent] = useState<string>("photo");

  return (
    <div className={classes.adminWrapper}>
        <AdminSidebar current={current} setCurrent={setCurrent} />
        <AdminInput title="название" />
    </div>
  );
};

export default AdminPage;
