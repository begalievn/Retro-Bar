import React, { FC, useEffect, useState } from "react";
import classes from "./Paper.module.css";
import polaroidMini from "../../../../assets/institutionBarImg/photo/polaroidMini.png";
import top1 from "../../../../assets/institutionBarImg/photo/top1.png";
import top2 from "../../../../assets/institutionBarImg/photo/top2.png";
import top3 from "../../../../assets/institutionBarImg/photo/top3.png";
import { Grid } from "@mui/material";
import sliderLeft from "../../../../assets/institutionBarImg/iconsMap/sliderLeft.svg";
import sliderRight from "../../../../assets/institutionBarImg/iconsMap/sliderRight.svg";

const PaperTop: FC = () => {
  let carousel = [top1, top2, top3];
  const polaroidSet = [classes.frame1, classes.frame2, classes.frame3];
  const photoSet = [classes.fr1, classes.fr2, classes.fr3];
  const [index, setIndex] = useState(0);
  const [photo, setPhoto] = useState(carousel[index]);
  const [polaroid, setPolaroid] = useState(polaroidSet[0]);
  const [photoClass, setPhotoClass] = useState(photoSet[0]);

  const handleLast = (): void => {
    if (index <= 0) {
      //if current index passes last photo in array
      setIndex(carousel.length - 1);
      //set index back to zero
    } else {
      setIndex(index - 1);
    }
    setPhoto(carousel[index]);
    setPolaroid(polaroidSet[index]);
    setPhotoClass(photoSet[index]);
  };

  const handleNext = (): void => {
    if (index >= carousel.length - 1) {
      //if current index passes last photo in array
      setIndex(0);
      //set index back to zero
    } else {
      setIndex(index + 1);
    }
    setPhoto(carousel[index]);
    setPolaroid(polaroidSet[index]);
    setPhotoClass(photoSet[index]);
  };

  useEffect(() => {
    setPhoto(carousel[index]);
    setPolaroid(polaroidSet[index]);
    setPhotoClass(photoSet[index]);
  }, [index]);

  const handleActive = () => {
    
  }
  console.log(index);

  return (
    <div>
      <div className={classes.topWeb}>
        <p className={classes.hp}>24 мая 2022</p>
        <Grid container spacing={3} className={classes.top}>
          <Grid item xs={4} md={4}>
            <img src={polaroidMini} width="61%" className={classes.frame1} />
            <img src={top1} width="19%" className={classes.fr1} />
          </Grid>
          <Grid item xs={4} md={4}>
            <img src={polaroidMini} width="60%" className={classes.frame2} />
            <img src={top2} width="19%" className={classes.fr2} />
          </Grid>
          <Grid item xs={4} md={4}>
            <img src={polaroidMini} width="59%" className={classes.frame3} />
            <img src={top3} width="19%" className={classes.fr3} />
          </Grid>
        </Grid>
      </div>
      <div className={classes.topMobile}>
        <p className={classes.dateMobile}>24 мая 2022</p>
        <div className={classes.mobile}>
          <button className={classes.last} onClick={() => handleLast()}>
            <img src={sliderLeft} className={classes.slider} />
          </button>
          <img src={polaroidMini} width="55%" className={polaroid} />
          <img src={photo} width="53%" className={photoClass} />
          <button className={classes.next} onClick={() => handleNext()}>
            <img src={sliderRight} className={classes.slider} />
          </button>
        </div>
        <div className={classes.indexNumber}>
          {carousel.map((el, index) => (
            <button className={classes.indexBtn}>{index + 1}</button>
          ))}
        </div>
      </div>
    </div>
  );
};
export { PaperTop };
