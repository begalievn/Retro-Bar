import React, { FC } from "react";
import Smile from "../../assets/NewsPages/image/logo_smile.svg";
import { MyPerson, Section_adaptiveProps } from "../../types/newsPages/news";
import classes from "./Section_adaptive.module.css";

const SectionAdaptive: FC<Section_adaptiveProps> = ({ data }) => {
  return (
    <div className={classes.main_container}>
      <img className={classes.smile} src={Smile} />
      <h3 className={classes.title_main_container}>Личности</h3>
      <div className={classes.window}>
        <div className={classes.all_pages_container}>
          {data.map((item: MyPerson, index: number) => {
            return (
              <div key={index} className={classes.item_container}>
                <div className={[classes.item, classes.item_1].join(" ")}>
                  <div className={classes.img_container}>
                    <img
                      className={classes.img}
                      src={item.image}
                      alt="Person"
                    />
                  </div>
                  <div className={classes.background_container}>
                    <img
                      className={classes.background}
                      src={item.background}
                      alt="Person"
                    />
                    <span className={classes.text}>
                      <h2>{item.name}</h2>
                      <p>{item.description}</p>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SectionAdaptive;

// <div className={classes.main_container}>
//   <h2 className={classes.title}>Личности</h2>
//   <div className={classes.window}>
//     <div className={classes.all_pages_container}>
//       {data.map((item: MyPerson, index: number) => {
//         return (
//           <div key={index}>
//             <div>
//               <img src={item.image} alt="" />
//             </div>
//             <div>
//               <img src={item.background} alt="" />
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   </div>
// </div>
