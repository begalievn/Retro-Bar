import React from 'react';
import style from '../eventPage.module.css';

import hero1 from "../../../assets/eventsImages/hero1.png";
const Section2 = () => {



  let establishments=[
    {image:hero1,
      nameEstablishment: 'KIPISH BAR',
       
    },
    {image:hero1,
      nameEstablishment: 'PARK EVENTPACE'},
    {image:hero1,
    nameEstablishment: 'МАМАРАДА',
    },
    {image:hero1,
      nameEstablishment: 'SUSHI ROOM',
    },
   
  ]
  return (
    <div className={style.eventPage_section2}>
      <h3 >Все события</h3>
       <div className={style.eventPage_section2_establishments_back}>
        <div className={style.eventPage_section2_establishments}>
          {establishments?.map(item => {
          return <div className={style.eventPage_section2_establishment}>
              <div className={style.eventPage_section2_establishment_text}>   <h3>{item.nameEstablishment}</h3></div>
             <img src={item.image} alt="" />
             </div>
          })}
        </div>
         </div>
    </div>
  );
};

export default Section2;