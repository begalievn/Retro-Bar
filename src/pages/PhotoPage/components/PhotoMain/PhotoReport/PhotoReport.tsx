import React, { FC, useEffect, useState } from 'react';
import ImagesList from '../ImagesList/ImagesList';
import { IPhotosAnother } from "../interfaces";
import {IPhoto} from '../../../../../types/apiTypes/photo'

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

const images: IPhotosAnother[] = [
  {
    link: eventPlace,
    name: 'PARK EVENTPLACE',
    border: wideBorder,
    id: 1,
    eventName: 'ÜN',
    photosCount: 122,
    views: 6545,
    date: '14 мая 2022',
    studio: 'Фото студия “Оригами”',
    photos: [
     
    ],
  },
  {
    link: zeppelinBar,
    name: 'ZEPPELIN BAR',
    border: squareBorder,
    id: 2,
    eventName: 'STREET CREDIBILITY',
    photosCount: 144,
    views: 709,
    date: '20 мая 2022',
    photos: [
     
    ],
  },
  {
    link: kipishBar,
    name: 'KIPISH BAR',
    border: squareBorder,
    id: 3,
    eventName: 'Birthday Party',
    photosCount: 50,
    views: 660,
    date: '20 мая 2022',
    photos: [
    
    ],
  },
  {
    link: attention,
    name: 'ATTENTION',
    border: squareBorder,
    id: 4,
    eventName: 'ATTENTION',
    photosCount: 79,
    views: 665,
    date: '28 мая 2022',
    photos: [
     
    ],
  },
  {
    name: 'MUNCHEN PUB',
    link: munchenPub,
    border: squareBorder,
    id: 5,
    eventName: 'LIVE MUSIC: COOL BAND',
    photosCount: 60,
    views: 675,
    date: '20 мая 2022',
    photos: [
    
    ],
  },
  {
    name: 'PINTA PUB',
    link: pintaPub,
    border: longBorder,
    id: 6,
    eventName: 'АБДЫШ АТА',
    photosCount: 67,
    views: 4660,
    date: '14 мая 2022',
    photos: [
     
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
    eventName: 'SATURDAY',
    photosCount: 95,
    views: 5004,
    date: '14 мая 2022',
    photos: [
     
    ],
  },
  {
    name: 'SECRET MUSIC HALL',
    link: secretMusicHall,
    border: squareBorder,
    id: 9,
    eventName: 'ВИКТОРИНА',
    photosCount: 70,
    views: 4789,
    date: '11 мая 2022',
    photos: [
    
    ],
  },
  {
    name: 'MOLECULA',
    link: molecula,
    border: squareBorder,
    id: 10,
    eventName: 'ОТКРЫТИЕ',
    photosCount: 87,
    views: 8335,
    date: '21 октября 2021',
    photos: [
      
    ],
  },
  {
    name: 'ОБЛАКО 53',
    link: oblaco53,
    border: squareBorder,
    id: 11,
    eventName: 'КОНЦЕРТ: 5STA FAMILY',
    photosCount: 70,
    views: 7336,
    date: '22 мая 2022',
    photos: [
  
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
    eventName: 'TUESDAY',
    photosCount: 75,
    views: 4695,
    date: '14 мая 2022',
    photos: [
      
    ],
  },
];



const PhotoReport: FC = () => {
 
  // console.log(MokPhotos);

  
  

  const [finalResponse, setFinalResponse] = useState<Array<IPhotosAnother> | null>(null);
  const {
    data: photos,
    error,
    isLoading,
    refetch,
  } = photoAPI.useFetchAllPhotosQuery(20);
  // console.log(photos);
  console.log(Math.floor(Math.random() * 20),'saaaaaaaaaaaaaaaaaaaaaa');
  

  useEffect(() => {
    if (photos) {
      // console.log(photos.photoCards);
      let newImages: Array<IPhotosAnother> = [];
      for (let i = 0; i < images.length; i++) {
        let MokPhotos:Array<IPhoto> = [];
        for (let i = 0; i < Math.floor(Math.random() * 20); i++) {
          MokPhotos.push({id:Math.floor(Math.random() * Date.now()),created:Date.now().toString(),
            url:`https://picsum.photos/id/${Math.floor(Math.random() * 234)}/200/300`},);
          
        }
        let nativeElement = images[i];
        
        const responseElement = photos.photoCards[i];
        if (nativeElement.ad) {
          newImages.push(nativeElement)
          continue;
        };
        
        
        nativeElement = {
          ...nativeElement,
          name: responseElement.establishment.name,
          link: `https://picsum.photos/${Math.floor(Math.random() * 200)}/500`,
          views: responseElement.views,
          photosCount: responseElement.photos.length,
          eventName: responseElement.eventName,
          id: responseElement.id,
          date: responseElement.date,
          photos:  MokPhotos,
          
          

          // responseElement.photos.length ? responseElement.photos[0] : ""


        }
        newImages.push(nativeElement)

        // console.log(newImages);
        setFinalResponse(newImages);

      }


    }

  }, [photos])
  return <ImagesList images={finalResponse} />
};

export default PhotoReport;
