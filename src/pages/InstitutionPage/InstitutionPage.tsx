import React from 'react';
import styles from './styles.module.css'
import Top from './components/top/Top';
import { Container } from '@mui/system';
import Book from '../../UI/Book/Book';

const InstitutionPage = () => {
  return <div className={styles.back}>
    <Container disableGutters maxWidth='xl'>

      <Top />
      <Book/>

    </Container>


  </div>;
};

export default InstitutionPage;
