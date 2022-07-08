import React, { FC, useEffect } from 'react';
import style from './AllEvents.module.css';

import hero1 from '../../assets/eventsImages/hero1.png';
import hero2 from '../../assets/eventsImages/hero2.png';
import hero3 from '../../assets/eventsImages/hero3.png';
import hero4 from '../../assets/eventsImages/hero4.png';
import EstablishmentItem from './EstablishmentItem';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getPhotos } from '../../apis/getPhotos';
import { photoAPI } from '../../store/features/photos/photoQuery';
import { IPhotos } from '../../types/apiTypes/photo';

const AllEvents: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPhotos())
  }, []);


  let {
    data: photos
  } = photoAPI.useFetchAllContactsQuery(4);
 
  
  return (
    <div className={style.section2_establishments_block}>
      <div className={style.section2_establishments_back}>
        <div className={style.section2_establishments}>
          {photos?.photoCards.map((item:IPhotos) => (
            <EstablishmentItem item={item} />
          ))}
        </div>
      </div>
      <div className={style.section2_establishments_backMini}>
        <div className={style.section2_establishments}>
          {photos?.photoCards.slice(1, 3).map((item:IPhotos) => (
            <EstablishmentItem item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllEvents;
