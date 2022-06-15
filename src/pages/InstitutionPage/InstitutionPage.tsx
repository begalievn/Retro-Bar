import React from 'react';
import styles from './styles.module.css'
import Top from './components/top/Top';
import Institutes from './components/Institutes/Institutes';

const InstitutionPage = () => {
  return <div className={styles.back}>
   <Top/>
   <Institutes/>


  </div>;
};

export default InstitutionPage;
