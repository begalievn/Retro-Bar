import style from '../eventPage.module.css';
import AllEvents from '../../../layout/allEvents/AllEvents';
import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';

import { gettingPhotos } from '../../../store/features/photos/photosSlice';
import { Link, useNavigate } from 'react-router-dom';

const Section2: FC = () => {
  const navigate = useNavigate();
  return (
    <div className={style.eventPage_section2}>
      <h3>Все события</h3>
      <AllEvents />
      <Link to="/photo">Смотреть все</Link>
    </div>
  );
};

export default Section2;
