import React from "react";
import styles from "./placeInfo.module.css";
import logo from "../../../../assets/institution/placeInfo/logo.png";
import arrowleft from "../../../../assets/institution/placeInfo/arrowleft.png";
import arrowright from "../../../../assets/institution/placeInfo/arrowright.png";
import geotag from "../../../../assets/institution/placeInfo/geotag.svg";
import clock from "../../../../assets/institution/placeInfo/clock.svg";
import phone from "../../../../assets/institution/placeInfo/phone.svg";

import hotdishes from "../../../../assets/institution/placeInfo/hotdishes.svg";
import salads from "../../../../assets/institution/placeInfo/salads.svg";
import desserts from "../../../../assets/institution/placeInfo/desserts.svg";
import wineicon from "../../../../assets/institution/placeInfo/wineicon.svg";

import rating from "../../../../assets/institution/placeInfo/rating.svg";




function PlaceInfo() {
  return (
    <section className={styles.placeInfo}>
      <section className={styles.header}>
        <div className={styles.buttonPrev}>
          <img src={arrowleft} alt="" />
        </div>
        <div className={styles.headerLogoBlock}>
          <img className={styles.headerLogo} src={logo} alt="" />
        </div>
        <div className={styles.headerNaming}>
          <h3>KEANU</h3>
          <h4 className={styles.headerType}>Bar</h4>
        </div>
        <div className={styles.buttonNext}>
          <img src={arrowright} alt="" />
        </div>
      </section>

      <section className={styles.contact}>
        <div className={styles.contactRow}>
          <img src={geotag} alt="" />
          <h4 className={styles.contactRowText} >Манаса 28</h4>
        </div>
        <div className={styles.contactRow}>
        <img src={clock} alt="" />
        <h4 className={styles.contactRowText} >18:00-05:00</h4>
        </div>
        <div className={styles.contactRow}>
        <img src={phone} alt="" />
        <h4 className={styles.contactRowText} >0555667788</h4>
        </div>
      </section>

      <section className={styles.prices} >
        <div className={styles.pricesItem}>
          <img src={hotdishes} alt="" />
          <h4 className={styles.pricesText} >~5000 с</h4>
        </div>
        <div className={styles.pricesItem}>
          <img src={salads} alt="" />
          <h4 className={styles.pricesText} >~5000 с</h4>
        </div>
        <div className={styles.pricesItem}>
          <img src={desserts} alt="" />
          <h4 className={styles.pricesText} >~500 с</h4>
        </div>
        <div className={styles.pricesItem}>
          <img src={wineicon} alt="" />
          <h4 className={styles.pricesText} >~500 с</h4>
        </div>
        
      </section>

      <section className={styles.rating}>
        <img src={rating} alt="" />
        <p className={styles.ratingText}>9.5</p>
      </section>

    </section>
  );
}

export default PlaceInfo;
