import React, { useEffect, useState } from 'react';
import mainImage from '../../assets/contactsPage/polaroid.png';
import { Container, Grid } from '@mui/material';
import aboutUs from '../../assets/contactsPage/sketch.png';
import phoneIcon from '../../assets/contactsPage/phone.svg';
import whatsAppIcon from '../../assets/contactsPage/WhatsApp.svg';
import mailIcon from '../../assets/contactsPage/mail.svg';
import tapeFirst from '../../assets/contactsPage/border/tape.png';
import tapeSecond from '../../assets/contactsPage/border/tape2.png';
import tapeThird from '../../assets/contactsPage/border/tape3.png';
import firstBorder from '../../assets/contactsPage/border/polaroid.png';
import secondBorder from '../../assets/contactsPage/border/polaroid2.png';
import thirdBorder from '../../assets/contactsPage/border/polaroid3.png';
import img1 from '../../assets/contactsPage/border/photo.png';
import img2 from '../../assets/contactsPage/border/photo2.png';
import img3 from '../../assets/contactsPage/border/photo3.png';
import carousel1 from '../../assets/contactsPage/carousel.png';
import carousel2 from '../../assets/contactsPage/carousel2.png';
import carousel3 from '../../assets/contactsPage/carousel3.png';
import classes from './style.module.css';

const imagesArr = [mainImage, img1, img2, img3];

const ContactsPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  let imagesObj = {
    1: 1,
    2: 2,
    3: 3,
  };

  useEffect(() => {
    console.log(activeIndex);
  }, [activeIndex]);

  function swapImages(e) {
    let id = e.currentTarget.id;
    let imageIndex = imagesObj[id];
    imagesObj[id] = activeIndex;
    setActiveIndex(imageIndex);
    // console.log(imagesObj[id], activeIndex);
    // console.log('active index', activeIndex);
    console.log(imagesObj);
  }

  const tapes = [tapeFirst, tapeSecond, tapeThird];
  const borders = [firstBorder, secondBorder, thirdBorder];
  const carousels = [carousel1, carousel2, carousel3];

  return (
    <>
      <div id="backBlack"></div>
      <div id="backBlackResponsive"></div>
      <div className={classes.mainDiv}>
        <Container
          sx={{
            flexGrow: 1,
          }}
        >
          <Grid
            sx={{
              display: { md: 'flex', xs: 'none' },
              alignItems: 'center',
            }}
            container
            spacing={2}
          >
            <Grid item xs={12} md={5}>
              <img width="100%" src={imagesArr[activeIndex]} alt="" />
            </Grid>
            <Grid className={classes.threeImg} item xs={12} md={2}>
              {tapes.map((item) => (
                <img width={43} className={classes.tapes} src={item} alt="" />
              ))}
              {borders.map((item) => (
                <img width={120} src={item} alt="" />
              ))}

              <img
                className={classes.allImages}
                id="1"
                width="100"
                src={imagesArr[imagesObj[1]]}
                alt=""
                onClick={swapImages}
              />

              <img
                id="2"
                className={classes.allImages}
                width="100"
                src={imagesArr[imagesObj[2]]}
                alt=""
                onClick={swapImages}
              />

              <img
                id="3"
                className={classes.allImages}
                width="100"
                src={imagesArr[imagesObj[3]]}
                alt=""
                onClick={swapImages}
              />
            </Grid>

            <Grid sx={{ marginTop: '-100px' }} item xs={12} md={5}>
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
            </Grid>
          </Grid>

          {/* Responsive */}
          <Grid
            sx={{
              display: { md: 'none', xs: 'flex' },
              alignItems: 'center',
              textAlign: 'left',
              marginTop: '100px',
              marginBottom: '50px',
            }}
            container
            spacing={2}
          >
            <Grid item xs={12} md={5}>
              <div className={classes.aboutText}>
                <img src={aboutUs} alt="" />
                <h1>О нас</h1>
              </div>
              <h4>
                Медиа ресурс о светской, вечерней и ночной жизни города. Место,
                куда заходят чтоб почувствовать и быть в курсе всех событий в
                культурной жизни столицы.
              </h4>
            </Grid>
            {/* <Grid item xs={12} md={5}>
              <img width="90%" src={} alt="" />
            </Grid> */}
            <Grid item xs={12} md={5}>
              <img width="90%" src={imagesArr[activeIndex]} alt="" />
            </Grid>
            <Grid className={classes.threeImgResponsive} item xs={12} md={2}>
              {/* {borders.map((item) => (
                <img width={120} src={item} alt="" />
              ))}

              {imgArray.map((item) => (
                <img
                  className={classes.allImagesResponsive}
                  onClick={(e) => {
                    showResponsive(e);
                  }}
                  width="100"
                  src={item}
                  alt=""
                />
              ))} */}
              {carousels.map((item) => (
                <img width={120} src={item} alt="" />
              ))}
            </Grid>
            <Grid item xs={12} md={5}>
              <h3 style={{ color: '#ffb03b', fontSize: '20px' }}>
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
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default ContactsPage;
