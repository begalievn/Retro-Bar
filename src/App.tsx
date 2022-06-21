<<<<<<< HEAD
import "./App.css";
import MainRoutes from "./pages/index";
import Header from "./layout/Header/Header";
function App() {
  return (
    <div className="App">
      {/* <Header /> */}
=======
import './App.css';
import MainRoutes from './pages/index';
import Header from './layout/Header/Header';
import Footer from './layout/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Header />
>>>>>>> 8f5e05d366a2bb6c1064f11b9b6cad5fdd81bfd5
      <MainRoutes />
      <Footer />
    </div>
  );
}

export default App;
