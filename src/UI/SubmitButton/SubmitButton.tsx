import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
import styles from './SubmitButton.module.css';

type SubmitButtonProps = {
  tel: string;
};

function SubmitButton({ tel }: SubmitButtonProps) {
  const handleClick = () => {
    window.open(`tel:${tel}`);
  };

  return (
    // <a className={styles.anchorTag} href={`tel:${tel}`}>
    //   {' '}
    //   <button className={styles.button}>Позвонить</button>
    // </a>
    <a style={{ color: 'black' }} href={`tel:${tel}`}>
      <button className={styles.button}>Позвонить</button>
    </a>
  );
}

export default SubmitButton;
