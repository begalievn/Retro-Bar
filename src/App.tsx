import { useEffect } from 'react';
import { useAppDispatch } from './app/hooks';

// imported components
import MainRoutes from './pages/index';
import Header from './layout/Header/Header';
import Footer from './layout/Footer/Footer';

import './App.css';

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
