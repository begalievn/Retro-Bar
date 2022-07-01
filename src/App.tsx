import { useEffect } from 'react';
import { useAppDispatch } from './app/hooks';

// imported components
import MainRoutes from './pages/index';
import Header from './layout/Header/Header';
import Footer from './layout/Footer/Footer';

// imported apis
import { getPhotos } from './apis/getPhotos';
import { getVideos } from './apis/getVideos';
import { getEstablishments } from './apis/getEstablishments';

import './App.css';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log('dispatch photo');
    dispatch(getPhotos());
    dispatch(getVideos());
    dispatch(getEstablishments());
  }, []);

  return (
    <div className="App">
      <Header />
      <MainRoutes />
      <Footer />
    </div>
  );
}

export default App;
