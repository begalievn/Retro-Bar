import React, { useState } from 'react';
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
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const imgArray: string[] = [mainImage, img1, img2, img3];
  const tapes: string[] = [tapeFirst, tapeSecond, tapeThird];
  const borders: string[] = [firstBorder, secondBorder, thirdBorder];
  const carousels: string[] = [carousel1, carousel2, carousel3];
  let firstImg = imgArray.shift();

  function show(e: any): void {
    e.target.classList.toggle(classes.start);
    let m = document.querySelector('#backBlack');
    m?.classList.toggle(classes.backB);
  }
  function showResponsive(e: any): void {
    e.target.classList.toggle(classes.startResponsive);
    let m = document.querySelector('#backBlackResponsive');
    m?.classList.toggle(classes.backBResponsive);
  }

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
              <img width="100%" src={firstImg} alt="" />
            </Grid>
            <Grid className={classes.threeImg} item xs={12} md={2}>
              {tapes.map((item) => (
                <img width={43} className={classes.tapes} src={item} alt="" />
              ))}
              {borders.map((item) => (
                <img width={120} src={item} alt="" />
              ))}

              {imgArray.map((item) => (
                <img
                  className={classes.allImages}
                  onClick={(e) => {
                    show(e);
                  }}
                  width="100"
                  src={item}
                  alt=""
                />
              ))}
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
            <Grid item xs={12} md={5}>
              <img width="90%" src={firstImg} alt="" />
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
                <img
                  onClick={(e) => {
                    showResponsive(e);
                  }}
                  width={120}
                  src={item}
                  alt=""
                />
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
