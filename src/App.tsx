import './App.css';
import MainRoutes from './pages/index';
import Header from './layout/Header/Header';
import Footer from './layout/Footer/Footer';
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
