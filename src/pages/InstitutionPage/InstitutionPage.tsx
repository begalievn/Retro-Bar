import React from 'react';
import styles from './styles.module.css'
import Top from './components/top/Top';
import { Container } from '@mui/system';

const InstitutionPage = () => {
  return <div className={styles.back}>
    <Container maxWidth='xl'>

      <Top />

    </Container>


  </div>;
};

export default InstitutionPage;
