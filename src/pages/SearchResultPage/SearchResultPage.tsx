import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import classes from './searchResultPage.module.css';

import backgroundPhoto from '../../assets/mainPage/photo-report-card-bg2.png';
import { useAppSelector } from '../../app/hooks';
import { IPhotoCards } from '../../types/apiTypes/photo';
import eyeIcon from '../../assets/icons/eye.svg';
import picIcon from '../../assets/icons/picture.svg';

const SearchResultPage = ({}) => {
  const searchResult = useAppSelector((state) => state.search.value);
  console.log('Redux search result', searchResult);

  const { searchId } = useParams();
  console.log(searchId);

  return (
    <div className={classes.container}>
      <div
        style={{ backgroundImage: `url(${backgroundPhoto})` }}
        className={classes.cardContainer}
      >
        <div
          // style={{ backgroundImage: `url(${photo})` }}
          className={classes.photoCard}
        >
          <img src={searchResult?.photos[0]?.url} />
          <div className={classes.cardContent_container}>
            <div className={classes.cardContent}>
              <h4>{searchResult?.establishment?.name}</h4>
              <p>{searchResult?.eventName}</p>
              <div className={classes.cardContent_info}>
                <div className={classes.cardContent_info__left}>
                  <div className={classes.cardContent_info__watches}>
                    <img src={eyeIcon} alt="watches icon" />
                    <span>{searchResult.views}</span>
                  </div>
                  <div className={classes.cardContent_info__pics}>
                    <img src={picIcon} alt="pic icon" />
                    <span>{searchResult.photos.length}</span>
                  </div>
                </div>
                <div className={classes.cardContent_info__right}>
                  <span>{searchResult.date}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResultPage;
