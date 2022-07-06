import { FC } from "react";
import classes from "./Institutionbar.module.css";

import {
  WhatsappShareButton,
  TelegramShareButton,
  EmailShareButton,
  FacebookShareButton,
} from "react-share";
import {
  FacebookIcon,
  TelegramIcon,
  WhatsappIcon,
  EmailIcon,
} from "react-share";
const ShareSocial: FC = () => {
  const shareUrl = "https://www.linkedin.com/in/millana-chotubaeva-883122230/";
  return (
    <>
      <FacebookShareButton url={shareUrl} className={classes.socialBtn}>
        <FacebookIcon size={25} round></FacebookIcon>
      </FacebookShareButton>
      <TelegramShareButton url={shareUrl} className={classes.socialBtn}>
        <TelegramIcon size={25} round></TelegramIcon>
      </TelegramShareButton>
      <WhatsappShareButton url={shareUrl} className={classes.socialBtn}>
        <WhatsappIcon size={25} round></WhatsappIcon>
      </WhatsappShareButton>
      <EmailShareButton url={shareUrl} className={classes.socialBtn}>
        <EmailIcon size={25} round></EmailIcon>
      </EmailShareButton>
    </>
  );
};
export { ShareSocial };
