import React from 'react';

import classes from './mainAd.module.css';

const MainAd = () => {
  return (
    <div className={classes.mainAd}>
      <div>
        <img />
      </div>
      <div className={classes.mainAd_content}>
        <h3>{'Заказать сьёмку сейчас'}</h3>
        <p>
          {
            'Современные технологии достигли такого уровня, что перспективное планирование способствует подготовке и реализации позиций, занимаемых участниками в отношении поставленных задач.'
          }
        </p>

        <button>{'Позвонить'}</button>
      </div>
    </div>
  );
};

export default MainAd;
