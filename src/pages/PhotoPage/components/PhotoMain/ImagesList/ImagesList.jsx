import React from 'react'
import styles from "../PhotoMain.module.css";

function ImagesList({images}) {
  return (
    <>
      {images.map((item) => (
        <div className={styles[item.class]} key={item.id}>
          <div className={styles.image_border}>
            <img src={item.border} alt="" />
          </div>
          <div className={styles.image}>
            <img src={item.link} alt="" />
          </div>
          <div className={styles.image_info}>
            {item.ad ? <div >
              <h3 className={styles.advertise_title}>{item.title}</h3>
              <p className={styles.advertise_text}>{item.text}</p>
            </div> : 
            
            <>
              <h4 className={styles.image_info_title}>{item.name}</h4>
              <p className={styles.image_info_partyName}>{item.partyName}</p>
              <div className={styles.image_info_footer}>
                <span className={styles.image_info_views}><img src={require('../../../../../assets/photoPageImages/icons/eye.svg').default} alt="" />{item.views}</span>
                <span className={styles.image_info_photos}><img src={require('../../../../../assets/photoPageImages/icons/pic.svg').default} alt="" />{item.photos}</span>
                <span className={styles.image_info_date}>{item.date}</span>
              </div>
            </>
            }
          </div>
        </div>
        
  
        // <Route path={item.link} element={item.element} key={item.id} />
      ))}
    </>
  )
}

export default ImagesList