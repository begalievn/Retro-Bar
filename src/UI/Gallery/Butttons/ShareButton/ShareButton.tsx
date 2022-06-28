import React, { FC } from "react";
import styles from "./ShareButton.module.css";
import shareIcon from "../../../../assets/photoPageImages/gallery-images/share-icon.svg";
import SocialMedias from "./SocialMedias/SocialMedias";
import Popover from "@mui/material/Popover";
interface ShareButtonProps {
  image: string;
}

const ShareButton: FC<ShareButtonProps> = ({ image }) => {
  const [show, setShow] = React.useState(false);
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

  return (
    <div className={styles.share}>
      {show && (
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
          <SocialMedias image={image} />
        </Popover>
      )}
      <button onClick={(e) => {setShow(!show);handleClick(e)}} className={styles.share_btn}>
        Поделиться
        <img src={shareIcon} alt="" />
      </button>
    </div>
  );
};

export default ShareButton;
