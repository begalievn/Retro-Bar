import React, { FC, useEffect, useState } from 'react';
import ImagesList from '../ImagesList/ImagesList';
import { IPhotos } from "../interfaces";

import {
  eventPlace,
  zeppelinBar,
  kipishBar,
  attention,
  munchenPub,
  pintaPub,
  effect,
  mamaRada,
  secretMusicHall,
  molecula,
  oblaco53,
  fantasy,
  pablo,
  squareBorder,
  wideBorder,
  longBorder,
  circle,
  star,
} from './index';
import Button from '../../Button/Button';
import { photoAPI } from '../../../../../store/features/photos/photoQuery';
import { useAppSelector } from '../../../../../app/hooks';

const images: IPhotos[] = [
  {
    link: eventPlace,
    name: 'PARK EVENTPLACE',
    border: wideBorder,
    id: 1,
    partyName: 'ÜN',
    photos: 122,
    views: 6545,
    date: '14 мая 2022',
    studio: 'Фото студия “Оригами”',
    images: [
     
    ],
  },
  {
    link: zeppelinBar,
    name: 'ZEPPELIN BAR',
    border: squareBorder,
    id: 2,
    partyName: 'STREET CREDIBILITY',
    photos: 144,
    views: 709,
    date: '20 мая 2022',
    images: [
     
    ],
  },
  {
    link: kipishBar,
    name: 'KIPISH BAR',
    border: squareBorder,
    id: 3,
    partyName: 'Birthday Party',
    photos: 50,
    views: 660,
    date: '20 мая 2022',
    images: [
    
    ],
  },
  {
    link: attention,
    name: 'ATTENTION',
    border: squareBorder,
    id: 4,
    partyName: 'ATTENTION',
    photos: 79,
    views: 665,
    date: '28 мая 2022',
    images: [
     
    ],
  },
  {
    name: 'MUNCHEN PUB',
    link: munchenPub,
    border: squareBorder,
    id: 5,
    partyName: 'LIVE MUSIC: COOL BAND',
    photos: 60,
    views: 675,
    date: '20 мая 2022',
    images: [
    
    ],
  },
  {
    name: 'PINTA PUB',
    link: pintaPub,
    border: longBorder,
    id: 6,
    partyName: 'АБДЫШ АТА',
    photos: 67,
    views: 4660,
    date: '14 мая 2022',
    images: [
     
    ],
  },
  {
    name: 'Реклама',
    link: effect,
    ad: true,
    border: wideBorder,
    id: 7,
    icon: star,
    title: 'Фото и видео усл',
    text: 'Современные технологии достигли такого уровня, что перспективное планирование способствует.',
  },
  {
    name: 'МАМА РАДА',
    link: mamaRada,
    border: squareBorder,
    id: 8,
    partyName: 'SATURDAY',
    photos: 95,
    views: 5004,
    date: '14 мая 2022',
    images: [
     
    ],
  },
  {
    name: 'SECRET MUSIC HALL',
    link: secretMusicHall,
    border: squareBorder,
    id: 9,
    partyName: 'ВИКТОРИНА',
    photos: 70,
    views: 4789,
    date: '11 мая 2022',
    images: [
    
    ],
  },
  {
    name: 'MOLECULA',
    link: molecula,
    border: squareBorder,
    id: 10,
    partyName: 'ОТКРЫТИЕ',
    photos: 87,
    views: 8335,
    date: '21 октября 2021',
    images: [
      
    ],
  },
  {
    name: 'ОБЛАКО 53',
    link: oblaco53,
    border: squareBorder,
    id: 11,
    partyName: 'КОНЦЕРТ: 5STA FAMILY',
    photos: 70,
    views: 7336,
    date: '22 мая 2022',
    images: [
  
    ],
  },
  {
    name: 'Реклама',
    link: fantasy,
    ad: true,
    border: wideBorder,
    id: 12,
    icon: circle,
    title: 'Заказать сьёмку сейчас',
    text: 'Современные технологии достигли такого уровня, что перспективное планирование способствует подготовке и реализации позиций, занимаемых участниками в отношении поставленных задач.',
  },
  {
    name: 'PABLO',
    link: '',
    border: longBorder,
    id: 13,
    partyName: 'TUESDAY',
    photos: 75,
    views: 4695,
    date: '14 мая 2022',
    images: [
      
    ],
  },
];



const PhotoReport: FC = () => {
  let MokPhotos:Array<string> = [];
  for (let i = 0; i < Math.floor(Math.random() * 20); i++) {
    MokPhotos.push(`https://picsum.photos/${Math.floor(Math.random() * 200)}/200`);
    
  }
  // console.log(MokPhotos);

  
  

  const [finalResponse, setFinalResponse] = useState<Array<IPhotos> | null>(null);
  const {
    data: photos,
    error,
    isLoading,
    refetch,
  } = photoAPI.useFetchAllPhotosQuery(20);
  // console.log(photos);


  useEffect(() => {
    if (photos) {
      // console.log(photos.photoCards);
      let newImages: Array<IPhotos> = [];
      for (let i = 0; i < images.length; i++) {
        let nativeElement = images[i];
        
        const responseElement = photos.photoCards[i];
        if (nativeElement.ad) {
          newImages.push(nativeElement)
          continue;
        };
        // console.log(nativeElement);
        
        nativeElement = {
          ...nativeElement,
          name: responseElement.establishment.name,
          link: `https://picsum.photos/${Math.floor(Math.random() * 200)}/500`,
          views: responseElement.views,
          photos: responseElement.photos.length,
          partyName: responseElement.eventName,
          id: responseElement.id,
          date: responseElement.date,
          images: MokPhotos

          // responseElement.photos.length ? responseElement.photos[0] : ""


        }
        newImages.push(nativeElement)

        // console.log(newImages);
        setFinalResponse(newImages)

      }


    }

  }, [photos])
  return <ImagesList images={finalResponse} />
};

export default PhotoReport;
