import "./App.css";
import MainRoutes from "./pages/index";
import Header from "./layout/Header/Header";
import Footer from "./layout/Footer/Footer";
import { useLocation } from "react-router-dom";
import { useExcept } from "./utils/headerExceptions";

function App() {
  const location = useLocation();
  const isExcept = useExcept(location.pathname);

  return (
    <div className="App">
      {isExcept && <Header />}
      <MainRoutes />
      {isExcept && <Footer />}
    </div>
  );
}

export default App;
