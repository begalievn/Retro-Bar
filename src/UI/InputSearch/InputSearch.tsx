import React, { useState } from 'react';

import classes from './InputSearch.module.css';
import SearchBtn from '../SearchBtn/SearchBtn';
import { someClasses } from '../../utils/someClasses';

export const InputSearch = (props: React.HTMLProps<HTMLInputElement>) => {
  // const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setInputValue(e.target.value);
  // };
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    console.log(value);
  };

  return (
    <div className={classes.inputSearchBlock}>
      <input
        className={classes.inputSearch}
        onChange={handleChange}
        placeholder={props.placeholder}
        value={value}
        onKeyDown={props.onKeyDown}
        onKeyUp={props.onKeyUp}
      />
      <SearchBtn className={classes.inputSearchBtn} />
    </div>
  );
};

export default InputSearch;
