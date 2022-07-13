import { Popover } from '@mui/material';
import React, { useState } from 'react'
import SocialMedias from '../../Gallery/Butttons/ShareButton/SocialMedias/SocialMedias';
import styles from "./uniButton.module.css";


import share from "../../../assets/photoPageImages/gallery-images/share-icon.svg"

import download from "../../../assets/photoPageImages/gallery-images/download-icon.svg"
import axios from 'axios';

type UniButtonProps = {
  image?: string;
  text: string;
}




function UniButton({ text, image }: UniButtonProps) {
  const [show, setShow] = useState(false)

  const button = text === "Поделиться" ? styles.buttonShare : styles.buttonDownload

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover popover" : undefined;


  if (text === 'Поделиться') {
    return (
      <>

        {(show && text === 'Поделиться') && (
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            className={styles.popover}
          >
            <SocialMedias image={download} />
          </Popover>
        )}
        <button onClick={(e) => { setShow(!show); handleClick(e) }} className={button}>{text}
          <img className={styles.image} src={share} alt="" />
        </button>
      </>
    )

  }


  if (text === 'Скачать') {

  
  
    return (
<>
       <div className={button}>
        {text}
        <img className={styles.image} src={download} alt="" />
       </div>
      </>
    )
  }
  return null


}

export default UniButton