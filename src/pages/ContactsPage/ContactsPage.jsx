import React, { useEffect, useState } from 'react';
import { Container, Grid } from '@mui/material';
import aboutUs from '../../assets/contactsPage/sketch.png';
import phoneIcon from '../../assets/contactsPage/phone.svg';
import whatsAppIcon from '../../assets/contactsPage/WhatsApp.svg';
import mailIcon from '../../assets/contactsPage/mail.svg';

import photo1 from '../../assets/contactsPage/img/photo1.png';
import photo2 from '../../assets/contactsPage/img/photo2.png';
import photo3 from '../../assets/contactsPage/img/photo3.png';

import carousel1 from '../../assets/contactsPage/border/carousel1.png';
import carousel2 from '../../assets/contactsPage/border/carousel2.png';
import carousel3 from '../../assets/contactsPage/border/carousel3.png';

import mainBack from '../../assets/contactsPage/polaroid.png';
import mainImage from '../../assets/contactsPage/img/mainImage.png';



import classes from './style.module.css';


const ContactsPage = () => {
  const [activeIndex, setActiveIndex] = useState(0)



  const [frameArr, setFrameArr] = useState([
    {
      frame: mainBack,
      id: 1,
      photo: mainImage
    },
    {
      frame: carousel1,
      id: 2,
      photo: photo1

    }, {
      frame: carousel2,
      id: 3,
      photo: photo2

    }, {
      frame: carousel3,
      id: 4,
      photo: photo3

    }])



  const sliderFunc = (id) => {
    frameArr.map((item, index) => {
      if (item.id === id) {

        let image = frameArr[0].photo
        let newArr = [...frameArr]
        newArr[0].photo = item.photo
        newArr[index].photo = image
        setFrameArr(newArr)
      }
    })
  }




  return (
    <>
      <div id="backBlack"></div>

      <div id="backBlackResponsive"></div>
      <div className={classes.container}>

        <div className={classes.mainDiv} >


          <div className={classes.allImages}>
            {frameArr.map((item, index) => (
              <div className={classes.imageFrame} key={item.id}>
                <img className={index > 0 ? classes.smallImageFrame : null} src={item.frame} alt="" />
                <img className={classes.smallImage} onClick={() => sliderFunc(item.id)} src={item.photo} alt="" />
              </div>
            ))}
          </div>

          
          <div className={classes.text_block}>
            <div className={classes.aboutText}>
              <img src={aboutUs} alt="" />
              <h1>О нас</h1>
            </div>
            <h4>
              Медиа ресурс о светской, вечерней и ночной жизни города. Место,
              куда заходят чтоб почувствовать и быть в курсе всех событий в
              культурной жизни столицы.
            </h4>
            <h3
              style={{
                color: '#ffb03b',
                marginTop: '30px',
                fontSize: '20px',
              }}
            >
              Заказ фото/видео репортажа:
            </h3>
            <div className={classes.information}>
              <div>
                <img src={phoneIcon} alt="" />
                <a href="#">0 558 55 00 00</a>
              </div>
              <div>
                <img src={whatsAppIcon} alt="" />
                <a href="#">0 778 55 00 00</a>
              </div>
              <div>
                <img src={mailIcon} alt="" />
                <a href="https://mail.google.com/">info@foodzero.com</a>
              </div>
            </div>
          </div>



        </div>
      </div>
    </>
  );
};

export default ContactsPage;
