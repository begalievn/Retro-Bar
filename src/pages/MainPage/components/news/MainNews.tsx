import React from 'react';
import newsImage from '../../../../assets/mainPage/main-news-image.png';

import classes from './mainNews.module.css';

const MainNews = () => {
  return (
    <div className={classes.news_container}>
      <div className={classes.content}>
        <h3 className={classes.content_title}>{'Новость'}</h3>
        <p className={classes.content_info}>
          {
            'Современные технологии достигли такого уровня, что перспективное планирование способствует подготовке и реализации позиций, занимаемых участниками в отношении поставленных задач.'
          }
        </p>
        <p className={classes.content_date}>{'01.04.2022'}</p>
      </div>
      <div className={classes.image_container}>
        <img src={newsImage} />
      </div>
    </div>
  );
};

export default MainNews;
