import React, { FC } from "react";

import classes from "./SocialComponent.module.css";
import AdminInput from "../AdminInput/AdminInput";
import { IPageBody } from "../../../../types/adminPage/adminPage";

interface SocialComponentProps {
  page: IPageBody;
  inputValue: any;
  setInputValue: (some: any) => void;
}

const SocialComponent: FC<SocialComponentProps> = ({
  page,
  inputValue,
  setInputValue,
}) => {
  return (
    <div className={classes.socialWrapper}>
      <div className={classes.socialBlock}>
        <AdminInput
          title={"Telegram"}
          name={"telegram"}
          page={page}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
        <AdminInput
          title={"Instagram"}
          name={"instagram"}
          page={page}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
      </div>
      <div className={classes.socialBlock}>
        <AdminInput
          title={"Youtube"}
          name={"Youtube"}
          page={page}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
        <AdminInput
          title={"Mail"}
          name={"Email"}
          page={page}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
      </div>
    </div>
  );
};

export default SocialComponent;
