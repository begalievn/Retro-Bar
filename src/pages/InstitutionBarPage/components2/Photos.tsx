import { FC, useState, useEffect } from "react";
import classes from "./livebarstyle.module.css";
// import top1 from "../../../assets/institutionBarImg/photo/top1.png";
// import top2 from "../../../assets/institutionBarImg/photo/top2.png";
// import top3 from "../../../assets/institutionBarImg/photo/top3.png";
import polaroidMini from "../../../assets/institutionBarImg/photo/polaroidMini.png";
import sliderLeft from "../../../assets/institutionBarImg/iconsMap/sliderLeft.svg";
import sliderRight from "../../../assets/institutionBarImg/iconsMap/sliderRight.svg";
// interface IbringArray {
//   arr?: Array<string>;
// }
export interface IArrayItem {
  id: number;
  photo: string;
}
export interface IArrayProps {
  items: IArrayItem[];
  photo1: string;
  photo2: string;
  photo3: string;
}
const Photos: FC<IArrayProps> = ({ items, photo1, photo2, photo3 }) => {
  //   const [dataPhoto, setDataPhoto] = useState([
  //     { id: 1, photo: top1 },
  //     { id: 2, photo: top2 },
  //     { id: 3, photo: top3 },
  //   ]);
  const [dataPhoto, setDataPhoto] = useState(items);
  let carousel = [photo1, photo2, photo3];
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

  return (
    <div className={classes.photosPaper}>
      <h3 className={classes.data}>24 мая 2022</h3>
      <div className={classes.gridPhotos}>
        {dataPhoto.map((el) => (
          <div className={classes.photosCombine}>
            <img src={polaroidMini} className={classes.miniPhotoPolaroid} />
            <img src={el.photo} className={classes.miniPhotos} />
          </div>
        ))}
      </div>
      <div className={classes.mobileMobile}>
        <div className={classes.mobileVersion}>
          <div>
            <button className={classes.last} onClick={() => handleLast()}>
              <img src={sliderLeft} className={classes.slider} />
            </button>
          </div>
          <div className={classes.mixPhoto}>
            <img src={polaroidMini} className={polaroid} />
            <img src={photo} className={photoClass} />
          </div>
          <div className={classes.btnNext}>
            <button className={classes.next} onClick={() => handleNext()}>
              <img src={sliderRight} className={classes.slider} />
            </button>
          </div>
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
export { Photos };
