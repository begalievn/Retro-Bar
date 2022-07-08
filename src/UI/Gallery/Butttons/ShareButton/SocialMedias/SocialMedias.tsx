import React, { FC } from 'react'
import {
  EmailShareButton,
  FacebookShareButton,
  PinterestShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  VKShareButton,
  EmailIcon,
  FacebookIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
  VKIcon,
  
} from "react-share";

import styles from './SocialMedias.module.css'

interface SocialMediasProps {
  image:string
}
const SocialMedias:FC<SocialMediasProps> = ({image}) => {

  const shareUrl = image
  return (
    <div>
      <FacebookShareButton className={styles.soc_media} url={shareUrl}>
        <FacebookIcon size={32} round={true}/>
      </FacebookShareButton>
      <TelegramShareButton className={styles.soc_media} url={shareUrl}>
        <TelegramIcon size={32} round={true}/>
      </TelegramShareButton>
      <WhatsappShareButton className={styles.soc_media} url={shareUrl}>
        <WhatsappIcon size={32} round={true}/>
      </WhatsappShareButton>
      <TwitterShareButton className={styles.soc_media} url={shareUrl}>
        <TwitterIcon size={32} round={true}/>
      </TwitterShareButton>
      <EmailShareButton className={styles.soc_media} url={shareUrl}>
        <EmailIcon size={32} round={true}/>
      </EmailShareButton>
      <VKShareButton url={shareUrl}>
        <VKIcon size={32} round={true}/>
      </VKShareButton>
    </div>
  )
}

export default SocialMedias