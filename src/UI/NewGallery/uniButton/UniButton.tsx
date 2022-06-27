import React from 'react'
import styles from "./uniButton.module.css";

type UniButtonProps={
  image?:string;
  text: string;
}


function UniButton({text,image}:UniButtonProps) {
  const button = text === "Поделиться" ? styles.buttonShare :  styles.buttonDownload
  
    
    return (
      <button className={button}>{text}
      <img className={styles.image} src={image} alt="" />
      </button>
    )

}

export default UniButton