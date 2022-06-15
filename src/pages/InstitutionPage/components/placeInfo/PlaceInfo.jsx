import React from 'react'
import styles from './placeInfo.module.css'
import logo from '../../../../assets/institution/placeInfo/logo.png'

function PlaceInfo() {
  return (
   <section className={styles.placeInfo}>
     <div className={styles.header}>
      <div className={styles.headerLogoBlock}>
        <img className={styles.headerLogo} src={logo} alt="" />
      </div>
      <div className={styles.headerNaming}>
        <h3>KEANU</h3>
        <h4>Bar</h4>

      </div>
     </div>
   </section>
  )
}

export default PlaceInfo