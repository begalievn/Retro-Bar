import React, { FC } from 'react';
import InstitutionsSlider, {
  TopInstCardsType,
} from './institutions-slider/InstitutionsSlider';

import classes from '../../mainPage.module.css';

interface TopInstitutionsProps {
  institutions: TopInstCardsType[];
}

const TopInstituions: FC<TopInstitutionsProps> = ({ institutions }) => {
  return (
    <div className={classes.institutions_container}>
      <h2
        className={[classes.main_title, classes.institutions_title].join(' ')}
      >
        Топ заведений
      </h2>

      <div className={classes.institutions_slider}>
        <InstitutionsSlider cardsData={institutions} />
      </div>
      <div className={classes.top_inst_ellipse_deco}></div>
    </div>
  );
};

export default TopInstituions;
