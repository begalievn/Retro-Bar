
import style from '../eventPage.module.css';


import  AllEvents from '../../../layout/allEvents/AllEvents'


const Section2 = () => {



  



  return (
    <div className={style.eventPage_section2}>
      <h3 >Все события</h3>
      <AllEvents/>
     <a href='#'>Смотреть все</a>
    </div>
  );
};

export default Section2;