import React, { Dispatch, FC, SetStateAction, useState } from 'react';

import classes from './SearchList.module.css';
import { ListItem, ListItemText, ListItemButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../app/hooks';
import { saveSearchResult } from '../../store/features/search/searchSlice';

interface SearchListProps {
  searchList: any;
  propertyName: string;
  icon: string;
  type: string;
  setInputVisible?: Dispatch<SetStateAction<boolean>>;
}

const SearchList: FC<SearchListProps> = ({
  searchList = [],
  propertyName,
  icon,
  type,
  setInputVisible,
}) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const clickHandler = (item: any) => {
    if (type === 'establishment') {
      navigate(`/institution/${item.id}`);
    } else if (type === 'photo') {
      dispatch(saveSearchResult(item));
      navigate(`/search-result/${item.id}`);
    } else if (type === 'video') {
      navigate(`/video`);
    }

    setInputVisible!(false);
  };

  return (
    <div className={classes.searchBlock}>
      <ul>
        {searchList.map((listItem: any, index: number) => (
          <li key={index} onClick={() => clickHandler(listItem)}>
            {listItem[propertyName]} <img src={icon} />{' '}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchList;
