import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
  FC,
} from 'react';

import classes from './InputSearch.module.css';
import SearchBtn from '../SearchBtn/SearchBtn';
import { someClasses } from '../../utils/someClasses';
import { searchAPI } from '../../store/features/search/searchQuery';
import useDebounce from '../../hooks/useDebounce';
import SearchList from '../SearchList/SearchList';

import { photoSvg, videoSvg, buildingSvg } from '../../assets/icons/icons';

interface InputSearchProps {
  setInputVisible?: Dispatch<SetStateAction<boolean>>;
  placeholder: string;
}

export const InputSearch: FC<InputSearchProps> = ({
  setInputVisible,
  ...props
}) => {
  // const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setInputValue(e.target.value);
  // };
  const [value, setValue] = useState('');

  const debouncedValue = useDebounce(value, 400);

  const [fetchSearchResults, { data = [], isSuccess }] =
    searchAPI.useLazyGetSearchResultsQuery();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    if (value.length > 0) {
      fetchSearchResults(debouncedValue);
    } else {
    }
  }, [debouncedValue]);

  isSuccess ? console.log(data) : null;

  return (
    <>
      <div className={classes.inputSearchBlock}>
        <input
          className={classes.inputSearch}
          onChange={handleChange}
          placeholder={props.placeholder}
          value={value}
        />
        <SearchBtn className={classes.inputSearchBtn} />
      </div>
      {value.length > 0 ? (
        <div className={classes.results_container}>
          {data?.establishments?.length > 0 ? (
            <SearchList
              searchList={data.establishments}
              propertyName="name"
              icon={buildingSvg}
              type={'establishment'}
              setInputVisible={setInputVisible}
            />
          ) : null}
          {data?.photoCards?.length > 0 ? (
            <SearchList
              searchList={data.photoCards}
              propertyName="eventName"
              icon={photoSvg}
              type={'photo'}
              setInputVisible={setInputVisible}
            />
          ) : null}
          {data?.videoCards?.length > 0 ? (
            <SearchList
              searchList={data.videoCards}
              propertyName="eventName"
              icon={videoSvg}
              type={'video'}
              setInputVisible={setInputVisible}
            />
          ) : null}
        </div>
      ) : null}
    </>
  );
};

export default InputSearch;
