import React, { FC } from 'react';

// imported images
import photo from '../../../../assets/ui-images/inst-slider-photo-active.png';
import red_tape from '../../../../assets/ui-images/inst-slider-red-tape.png';
import green_tape from '../../../../assets/ui-images/inst-slider-green-tape.png';
import redEffect from '../../../../assets/ui-images/inst-card-red-effect.png';
import grayEffect from '../../../../assets/ui-images/inst-card-gray-effect.png';

// imported types
import { InstitudeCardDataTypes } from '../../../../types/institutesSliderTypes/cardTypes';

// imported components
import InstituteCardInfo from '../institute-card-info/InstituteCardInfo';
// imported styles
import classes from './instituteCard.module.css';
import { useNavigate } from 'react-router-dom';

const InstituteCard: FC<InstitudeCardDataTypes> = ({ ...props }) => {
  const navigate = useNavigate();

  const clickHandler = (id: number) => {
    navigate(`/institution/${id}`);
  };

  return (
    <div className={classes.card}>
      <div className={classes.image_container}>
        {props.isActive ? (
          <div className={classes.red_tape}>
            <img src={red_tape} />
          </div>
        ) : (
          <div className={classes.gray_tape}>
            <img src={green_tape} alt="" />
          </div>
        )}

        <div className={classes.image_div}>
          <img src={props.photo?.url} alt="ints photo" />
        </div>

        {props.isActive ? (
          <div
            className={classes.image_effect}
            onClick={() => clickHandler(props.id)}
          >
            <img src={redEffect} alt="" />
          </div>
        ) : (
          <div className={classes.image_effect}>
            <img src={grayEffect} alt="" />
          </div>
        )}

        {props.isActive ? (
          <div className={classes.green_tape}>
            <img src={green_tape} />
          </div>
        ) : null}
      </div>
      <div className={classes.content_container}>
        {props.isActive ? <InstituteCardInfo {...props} /> : null}
      </div>
    </div>
  );
};

export default InstituteCard;
