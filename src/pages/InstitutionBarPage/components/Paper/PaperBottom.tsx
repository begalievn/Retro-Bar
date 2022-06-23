import { FC, useState, useEffect } from "react";
import polaroidMini from "../../../../assets/institutionBarImg/photo/polaroidMini.png";
import bottom1 from "../../../../assets/institutionBarImg/photo/bottom1.png";
import bottom2 from "../../../../assets/institutionBarImg/photo/bottom2.png";
import bottom3 from "../../../../assets/institutionBarImg/photo/bottom3.png";
import { Grid } from "@mui/material";
import classes from "./Paper.module.css";
import sliderLeft from "../../../../assets/institutionBarImg/iconsMap/sliderLeft.svg";
import sliderRight from "../../../../assets/institutionBarImg/iconsMap/sliderRight.svg";
const PaperBottom: FC = () => {
  let carousel = [bottom1, bottom2, bottom3];
  const polaroidSet = [classes.frame1, classes.frame2, classes.frame3];
  const photoSet = [classes.fr4, classes.fr5, classes.fr6];
  const [index, setIndex] = useState(1);
  const [photo, setPhoto] = useState(carousel[index]);
  const [polaroid, setPolaroid] = useState(polaroidSet[1]);
  const [photoClass, setPhotoClass] = useState(photoSet[1]);

  const handleLast = (): void => {
    if (index <= 0) {
      setIndex(carousel.length - 1);
    } else {
      setIndex(index - 1);
    }
    setPhoto(carousel[index]);
    setPolaroid(polaroidSet[index]);
    setPhotoClass(photoSet[index]);
  };

  const handleNext = (): void => {
    if (index >= carousel.length - 1) {
      setIndex(0);
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
  }, []);
  return (
    <div>
      <div className={classes.bottomWeb}>
        <h3 className={classes.hp}>15 марта 2022</h3>
        <Grid container spacing={3} className={classes.bottom}>
          <Grid item xs={4} md={4}>
            <img src={polaroidMini} width="61%" className={classes.frame1} />
            <img src={bottom1} width="19%" className={classes.fr1} />
          </Grid>
          <Grid item xs={4} md={4}>
            <img src={polaroidMini} width="60%" className={classes.frame2} />
            <img src={bottom2} width="19%" className={classes.fr2} />
          </Grid>
          <Grid item xs={4} md={4}>
            <img src={polaroidMini} width="60%" className={classes.frame3} />
            <img src={bottom3} width="19%" className={classes.fr3} />
          </Grid>
        </Grid>
      </div>
      <div className={classes.bottomMobile}>
        <h3 className={classes.dateMobile}>15 марта 2022</h3>
        <div className={classes.mobile}>
          <button className={classes.last} onClick={() => handleLast()}>
            <img src={sliderLeft} className={classes.slider} />
          </button>
          <img src={polaroidMini} width="55%" className={polaroid} />
          <img src={photo} width="54%" className={photoClass} />
          <button className={classes.next} onClick={() => handleNext()}>
            <img src={sliderRight} className={classes.slider} />
          </button>
        </div>
        <div className={classes.indexNumber}>
          {carousel.map((el, i) => (
            <button
              className={index === i ? classes.indexBtn2 : classes.indexBtn}
              key={el}
            >
              0{i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
export { PaperBottom };
