import React, { FC } from "react";
import styles from "./DownloadButton.module.css";
import downloadIcon from '../../../../assets/photoPageImages/gallery-images/download-icon.svg'
interface DownloadButtonProps {
  image:string
}
const DownloadButton:FC<DownloadButtonProps> = ({image}) => {
  return <a href={image} download className={styles.download_btn}>Скачатьdddd <img src={downloadIcon} alt="" /></a>;
};

export default DownloadButton;
