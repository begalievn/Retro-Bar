import React from 'react';
import classes from './style.module.css';
import aboutUs from '../../assets/contactsPage/sketch.png';

const TextBlock = () => {
  return (
    <div>
            <div className={classes.aboutText}>
              <img src={aboutUs} alt="" />
              <h1>О нас</h1>
            </div>
            <h4>
              Медиа ресурс о светской, вечерней и ночной жизни города. Место,
              куда заходят чтоб почувствовать и быть в курсе всех событий в
              культурной жизни столицы.
            </h4>
            </div>
  );
};

export default TextBlock;