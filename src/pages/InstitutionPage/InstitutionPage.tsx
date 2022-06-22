import React from 'react';
import styles from './styles.module.css'
import Top from './components/top/Top';
import { Container } from '@mui/system';
import Book from '../../UI/Book/Book';

let bookData= {

  text:' технологии достигли такого уровня, что перспективное планирование способствует.',
  title:'ЗАказать съёмку',
  image: '/api/imageSS'
}
const InstitutionPage = () => {
  return <div className={styles.back}>
    <Container disableGutters maxWidth='xl'>

      <Top />
      <Book page='institutions' />

    </Container>


  </div>;
};

export default InstitutionPage;
