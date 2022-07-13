import React, { FC, useEffect, useState } from "react";
import phoneIcon from "../../assets/contactsPage/phone.svg";
import whatsAppIcon from "../../assets/contactsPage/WhatsApp.svg";
import mailIcon from "../../assets/contactsPage/mail.svg";
import carousel1 from "../../assets/contactsPage/border/carousel1.png";
import carousel2 from "../../assets/contactsPage/border/carousel2.png";
import carousel3 from "../../assets/contactsPage/border/carousel3.png";
import mainBack from "../../assets/contactsPage/polaroid.png";
import tape from "../../assets/contactsPage/border/tape.png";
import classes from "./style.module.css";
import TextBlock from "./TextBlock";
import { IImageArr } from "../../types/contactsPageTypes/contactsPageTypes";
import { contactsAPI } from "../../store/features/contacts/contactsQuery";
import { IContacts } from "../../types/apiTypes/contacts";
import { IContactsObject } from "../../types/footerTypes/footerTypes";

const ContactsPage: FC = () => {
  const {
    data: contacts,
    isLoading,
    isSuccess

  } = contactsAPI.useFetchAllContactsQuery("");
  const array = contacts?.contacts;
  const [frameArr, setFrameArr] = useState<IImageArr[]>([]);
  const [phoneNumber, setPhoneNumber] = useState('')

  useEffect(() => {
    if(isSuccess){
    setFrameArr([
      {
        frame: mainBack,
        id: 1,
        photo: contacts.contacts[0].photos[0].url,
      },
      {
        frame: carousel1,
        id: 2,
        photo: contacts.contacts[0].photos[1].url,
      },
      {
        frame: carousel2,
        id: 3,
        photo: contacts.contacts[0].photos[2].url,
      },
      {
        frame: carousel3,
        id: 4,
        photo: contacts.contacts[0].photos[3].url,
      },
    ]);
    funcNumber(contacts)
    
  }
  }, [isSuccess]);

  const funcNumber = (contacts:IContactsObject)=>{
    if(isSuccess){ 
      let number = contacts?.contacts[0].phoneNumber;
      number = number.replace(/\s+/g, "");
      number=number.slice(1)
      number= `996${number}`;
      setPhoneNumber(number)
    }
  }
  




  const sliderFunc = (id: number): void => {
    frameArr.map((item, index) => {
      if (item.id === id) {
        let image = frameArr[0].photo;
        let newArr = [...frameArr];
        newArr[0].photo = item.photo;
        newArr[index].photo = image;
        setFrameArr(newArr);
      }
    });
  };
  return (
    <>
      <div className={classes.container}>
        <div className={classes.mainDiv}>
          <div className={classes.text_responsive}>
            {" "}
            <TextBlock array={array} />
          </div>

          <div className={classes.image_block}>
            <div className={classes.allImages}>
              {isLoading ? (
                <h2>Loading...</h2>
              ) : (
                frameArr.map((item, index) => (
                  <div className={classes.imageFrame} key={item.id}>
                    <img
                      className={index > 0 ? classes.smallImageFrame : ""}
                      src={item.frame}
                      alt=""
                    />
                    {index == 0 ? (
                      <img className={classes.tape} src={tape} />
                    ) : null}
                    <img
                      className={classes.smallImage}
                      onClick={() => sliderFunc(item.id)}
                      src={item.photo}
                      alt=""
                    />
                
                  </div>
                ))
              )}
            </div>
          </div>

          <div className={classes.text_block}>
            <div className={classes.text_block_desktop}>
              <TextBlock array={array} />
            </div>
            <h3
              style={{
                color: "#ffb03b",
                marginTop: "30px",
                fontSize: "20px",
              }}
            >
              Заказ фото/видео репортажа:
            </h3>
            {array?.map((item: IContacts) => (
              <div key={item.id} className={classes.information}>
                <div>
                  <img src={phoneIcon} alt="" />
                  <a href={`tel:+${phoneNumber}`}>{item.phoneNumber}</a>
                </div>
                <div>
                  <img src={whatsAppIcon} alt="" />
                  <a href={`https://api.whatsapp.com/send?phone=${phoneNumber}`}>{item.phoneNumber}</a>
                </div>
                <div>
                  <img src={mailIcon} alt="" />
                  <a target="_blank" href={`mailto:${item.mail}`}>
                    {item.mail}
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default ContactsPage;
