import React, { FC } from 'react';
import style from './AllEvents.module.css'



import hero1 from "../../assets/eventsImages/hero1.png";
import hero2 from "../../assets/eventsImages/hero2.png";
import hero3 from "../../assets/eventsImages/hero3.png";
import hero4 from "../../assets/eventsImages/hero4.png";
import EstablishmentItem from './EstablishmentItem';




interface IEstablishments{
  image: string;
  nameEstablishment: string;
  nameParty: string;
  views:number;
  amountImage:number;
  date: string;
}



const AllEvents:FC = () => {



 let establishments: Array<IEstablishments> = [
    {
      image: hero1,
      nameEstablishment: 'KIPISH BAR',
      nameParty: 'Birthday Party',
      views:660,
      amountImage:50,
      date: '20 мая 2022'
    },
    {
      image: hero2,
      nameEstablishment: 'PARK EVENTPACE',
      nameParty: 'ÜN',
      views:6545,
      amountImage:122,
      date:'14 мая 2022'
    },
    {
      image: hero3,
      nameEstablishment: 'МАМАРАДА',
      nameParty: 'Saturday',
      views: 5004,
      amountImage:95,
      date:'14 мая 2022'
    },
    {
      image: hero4,
      nameEstablishment: 'SUSHI ROOM',
      nameParty: 'ОТКРЫТИЕ ЛЕТНЕЙ ТЕРРАСЫ',
      views: 637,
      amountImage:122,
      date:'14 мая 2022'
    },

  ]

  return (
    <div className={style.section2_establishments_block}>
      <div className={style.section2_establishments_back}>
        <div className={style.section2_establishments}>
          {establishments?.map(item => (
          <EstablishmentItem item={item}/>
          ))}
        </div>
      </div>
      <div className={style.section2_establishments_backMini}>
        <div className={style.section2_establishments}>
          {establishments?.slice(1,3).map(item => (
          <EstablishmentItem item={item}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllEvents;