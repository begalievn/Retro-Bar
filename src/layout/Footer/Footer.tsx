import React, { useEffect, useState } from 'react';
import classes from './styles.module.css';
import telegramIcon from '../../assets/icons/Footer/telegram.svg';
import instagramIcon from '../../assets/icons/Footer/instagram.svg';
import youtubeIcon from '../../assets/icons/Footer/youtube.svg';
import bartIcon from '../../assets/icons/Footer/logo.svg';
import searchIcon from '../../assets/icons/Footer/Vector.svg';
import whatsAppIcon from '../../assets/icons/Footer/whatsapp.svg';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/system';
import { Link, useNavigate } from 'react-router-dom';
import { IFooterItems, IIcons } from '../../types/footerTypes/footerTypes';
import { contactsAPI } from '../../store/features/contacts/contactsQuery';
import { InputSearch } from '../../UI';
import SocialBlock from "../../UI/SocialBlock/SocialBlock";

const Footer = () => {
  const {
    data: contacts,
    isLoading,
    isSuccess,
  } = contactsAPI.useFetchAllContactsQuery('');

  const navigate = useNavigate();
  const liElem: IFooterItems[] = [
    {
      title: 'Фото',
      path: '/photo',
    },
    {
      title: 'Видео',
      path: '/video',
    },
    {
      title: 'Заведения',
      path: '/institution',
    },
  ];
  const liElem2: IFooterItems[] = [
    {
      title: 'Новости',
      path: '/news',
    },
    {
      title: 'Контакты',
      path: '/contacts',
    },
    {
      title: 'События',
      path: '/events',
    },
  ];
  const [iconsMedia, setIconsMedia] = useState<IIcons[]>([]);

  useEffect(() => {
    if (isSuccess) {
      let number: string = contacts?.contacts[0].phoneNumber
        .replace(/\s+/g, "")
        .slice(1);
      setIconsMedia([
        {
          icon: telegramIcon,
          path: `https://t.me/${contacts?.contacts[0].telegram}`,
        },
        {
          icon: instagramIcon,
          path: `https://www.instagram.com/${contacts?.contacts[0].instagram}`,
        },
        {
          icon: youtubeIcon,
          path: `https://www.youtube.com/results?search_query=${contacts?.contacts[0].youtube}`,
        },
        {
          icon: whatsAppIcon,
          path: `https://api.whatsapp.com/send/?phone=996${number}`,
        },
      ]);
    }
  }, [isSuccess]);

  const text: Array<string> = [
    'Политика конфиденциальности',
    'Copyright 2021',
    'Digital-агентство Active Trust',
  ];
  const [inputChange, setInputChange] = useState<string>('');

  function searchClick(name: string): void {}
  function scrollTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  return (
    <div className={classes.main}>
      <Container sx={{ flexGrow: 1, display: { xs: 'none', md: 'block' } }}>
        <Grid item xs={12} md={12} className={classes.inside}>
          <Grid item xs={12} md={3} className={classes.blocks}>
            <Grid
              sx={{ display: { xs: 'none', md: 'block' } }}
              className={classes.retro}
            >
              <div
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  scrollTop();
                  navigate('/');
                }}
                className={classes.retro2}
              >
                <span style={{ fontFamily: 'Montserrat Alternates' }}>
                  Retro
                </span>
                <img src={bartIcon} alt="" />
              </div>
            </Grid>

            <Grid
              sx={{ display: { xs: 'none', md: 'block' } }}
              item
              xs={12}
              className={classes.politicMD}
            >
              {text.map((item, index) => (
                <div key={index}>{item}</div>
              ))}
            </Grid>
          </Grid>
          <Grid
            sx={{ display: { xs: 'none', md: 'block' } }}
            item
            xs={12}
            md={3}
            className={classes.blocks2}
          >
            {liElem.map((item, index) => (
              <ul key={index}>
                <Link onClick={scrollTop} to={item.path}>
                  {item.title}
                </Link>
              </ul>
            ))}
          </Grid>
          <Grid
            sx={{ display: { xs: 'none', md: 'block' } }}
            item
            xs={12}
            md={3}
            className={classes.blocks3}
          >
            {liElem2.map((item, index) => (
              <ul key={index}>
                <Link onClick={scrollTop} to={item.path}>
                  {item.title}
                </Link>
              </ul>
            ))}
          </Grid>
          <Grid item xs={12} md={3} className={classes.blocks4}>
            <Grid
              className={classes.inputBlockMD}
              sx={{ display: { xs: 'none', md: 'flex' } }}
            >
              <div style={{ minWidth: '220px' }}>
                <InputSearch placeholder="поиск" />
              </div>
            </Grid>

            <Grid
              sx={{ display: { xs: 'none', md: 'block' } }}
              item
              xs={12}
              md={12}
              className={classes.iconsBlockMD}
            >
              <h6>Мы в социальных сетях:</h6>
              <div className={classes.onlyIconsMD}>
                {iconsMedia?.map((item, index) => (
                  <a target="_blank" key={index} href={item.path}>
                    <img src={item.icon} alt="" />
                  </a>
                ))}
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Container>

      <Container
        className={classes.main}
        sx={{ flexGrow: 1, display: { xs: 'block', md: 'none' } }}
      >
        <Grid item xs={12} md={12} className={classes.inside} container>
          <Grid item xs={12} md={3} className={classes.blocks}>
            <Grid
              item
              xs={12}
              sx={{ display: { xs: 'block', md: 'none' }, textAlign: 'center' }}
              className={classes.retro}
            >
              <div
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  scrollTop();
                  navigate('/');
                }}
                className={classes.retroMobile}
              >
                <span>Retro</span>
                <img src={bartIcon} alt="" />
              </div>
            </Grid>
            <SocialBlock color={'white'}/>
          </Grid>

          <Grid item xs={12} md={3} className={classes.blocks4}>
            <Grid
              sx={{
                display: { xs: 'flex', md: 'none', justifyContent: 'center' },
              }}
            >
              <div style={{ minWidth: '250px', marginTop: '20px' }}>
                <InputSearch placeholder="поиск" />
              </div>
            </Grid>
            <Grid
              sx={{
                display: { xs: 'block', md: 'none' },
                textAlign: 'center',
                marginTop: '30px',
              }}
              item
              xs={12}
              className={classes.politic}
            >
              {text.map((item, index) => (
                <div key={index}>{item}</div>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Footer;
