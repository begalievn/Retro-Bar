import React, { FC } from "react";
import classes from "./style.module.css";
import aboutUs from "../../assets/contactsPage/sketch.png";
import { IContacts } from "../../types/apiTypes/contacts";

interface ContactsPropsType {
  array: IContacts[];
}
const TextBlock: FC<ContactsPropsType> = ({ array }) => {
  return (
    <>
      {array?.map((item: IContacts) => (
        <div key={item.id}>
          <div className={classes.aboutText}>
            <img src={aboutUs} alt="" />
            <h1>О нас</h1>
          </div>
          <h4>{item.description}</h4>
        </div>
      ))}
    </>
  );
};

export default TextBlock;
