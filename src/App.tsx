import MainRoutes from "./pages/index";
import Header from "./layout/Header/Header";
import Footer from "./layout/Footer/Footer";
import { useLocation } from "react-router-dom";
import { useExcept } from "./utils/headerExceptions";
import { AdminSidebar } from "./pages/AdminPage/components";
import { isAdmin } from "./utils/getConfig";

import "./App.css";

function App() {
  const location = useLocation();
  const isExcept = useExcept(location.pathname);
  const isAdminPage = location.pathname.split("/")[1] == "admin" && isAdmin;

  return (
    <div className="App">
      {isExcept && <Header />}
      <MainRoutes />
      {isExcept && <Footer />}
    </div>
  );
}

export default App;
