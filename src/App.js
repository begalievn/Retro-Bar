import "./App.css";
import MainRoutes from "./pages/index";
import Footer from "./layout/Footer/Footer";
import Header from "./layout/Header/Header";
function App() {
  return (
    <div className="App">
      <Header />
      <MainRoutes />
      <Footer />
    </div>
  );
}

export default App;
