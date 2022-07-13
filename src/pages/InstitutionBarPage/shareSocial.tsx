import { FC } from "react";
import classes from "./institutionBar.module.css";

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

  
  return (
    <>
      <FacebookShareButton url={window.location.href} className={classes.socialBtn}>
        <FacebookIcon size={25} round></FacebookIcon>
      </FacebookShareButton>
      <TelegramShareButton url={window.location.href} className={classes.socialBtn}>
        <TelegramIcon size={25} round></TelegramIcon>
      </TelegramShareButton>
      <WhatsappShareButton url={window.location.href} className={classes.socialBtn}>
        <WhatsappIcon size={25} round></WhatsappIcon>
      </WhatsappShareButton>
      <EmailShareButton url={window.location.href} className={classes.socialBtn}>
        <EmailIcon size={25} round></EmailIcon>
      </EmailShareButton>
    </>
  );
};
export { ShareSocial };
