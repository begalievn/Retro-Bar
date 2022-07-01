import { useEffect } from 'react';
import classes from './bottomEmojis.module.css';

import { bottomEmojis, bottomArrowUp } from '../../assets/ui-images/images';

const BottomEmojis = () => {
  // useEffect(() => {
  //   // 👇️ scroll to top on page load
  //   window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  // }, []);

  return (
    <div className={classes.container}>
      <div
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }}
        className={classes.arrow_div}
      >
        <img src={bottomArrowUp} alt="" />
      </div>
      <div className={classes.image_div}>
        <img src={bottomEmojis} alt="emoji" />
      </div>
    </div>
  );
};

export default BottomEmojis;
