import React, { FC, useEffect, useState } from "react";
import ImagesList from "../ImagesList/ImagesList";
import { IPhotosAnother } from "../interfaces";
import { IPhoto } from "../../../../../types/apiTypes/photo";

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
} from "./index";
import Button from "../../Button/Button";
import { photoAPI } from "../../../../../store/features/photos/photoQuery";
import { useAppSelector } from "../../../../../app/hooks";
import { ifError } from "assert";

const images: IPhotosAnother[] = [
  {
    link: "",
    name: "",
    border: wideBorder,
    id: Math.floor(Math.random() * Date.now()),
    eventName: "",
    photosCount: 0,
    views: 0,
    date: "",
    studio: "",
    photos: [],
  },
  {
    link: "",
    name: "",
    border: squareBorder,
    id: Math.floor(Math.random() * Date.now()),
    eventName: "",
    photosCount: 0,
    views: 0,
    date: "",
    photos: [],
  },
  {
    link: "",
    name: "",
    border: squareBorder,
    id: Math.floor(Math.random() * Date.now()),
    eventName: "",
    photosCount: 0,
    views: 0,
    date: "",
    photos: [],
  },
  {
    link: "",
    name: "",
    border: squareBorder,
    id: Math.floor(Math.random() * Date.now()),
    eventName: "",
    photosCount: 0,
    views: 0,
    date: "",
    photos: [],
  },
  {
    name: "",
    link: "",
    border: squareBorder,
    id: Math.floor(Math.random() * Date.now()),
    eventName: "",
    photosCount: 0,
    views: 0,
    date: "",
    photos: [],
  },
  {
    name: "",
    link: "",
    border: longBorder,
    id: Math.floor(Math.random() * Date.now()),
    eventName: "",
    photosCount: 0,
    views: 0,
    date: "",
    photos: [],
  },
  {
    name: "Реклама",
    link: effect,
    ad: true,
    border: wideBorder,
    id: 7,
    icon: star,
    title: "Фото и видео усл",
    text: "Современные технологии достигли такого уровня, что перспективное планирование способствует.",
  },
  {
    name: "",
    link: "",
    border: squareBorder,
    id: Math.floor(Math.random() * Date.now()),
    eventName: "",
    photosCount: 0,
    views: 0,
    date: "",
    photos: [],
  },
  {
    name: "",
    link: "",
    border: squareBorder,
    id: Math.floor(Math.random() * Date.now()),
    eventName: "",
    photosCount: 0,
    views: 0,
    date: "",
    photos: [],
  },
  {
    name: "",
    link: "",
    border: squareBorder,
    id: Math.floor(Math.random() * Date.now()),
    eventName: "",
    photosCount: 0,
    views: 0,
    date: "",
    photos: [],
  },
  {
    name: "",
    link: "",
    border: squareBorder,
    id: Math.floor(Math.random() * Date.now()),
    eventName: "",
    photosCount: 0,
    views: 0,
    date: "",
    photos: [],
  },
  {
    name: "Реклама",
    link: fantasy,
    ad: true,
    border: wideBorder,
    id: 12,
    icon: circle,
    title: "Заказать сьёмку сейчас",
    text: "Современные технологии достигли такого уровня, что перспективное планирование способствует подготовке и реализации позиций, занимаемых участниками в отношении поставленных задач.",
  },
  {
    name: "",
    link: "",
    border: longBorder,
    id: Math.floor(Math.random() * Date.now()),
    eventName: "",
    photosCount: 0,
    views: 0,
    date: "",
    photos: [],
  },
];

const PhotoReport: FC = () => {
  const [finalResponse, setFinalResponse] =
    useState<Array<IPhotosAnother> | null>(null);
  const {
    data: photos,
    error,
    isLoading,
    refetch,
  } = photoAPI.useFetchAllPhotosQuery(20);

  useEffect(() => {
    if (photos) {
      const newImages: Array<IPhotosAnother> = [];
      for (let i = 0; i < images.length; i++) {
        let MokPhotos: Array<IPhoto> = [];
        for (let i = 0; i < Math.floor(Math.random() * 20); i++) {
          MokPhotos.push({
            id: Math.floor(Math.random() * Date.now()),
            created: Date.now().toString(),
            url: `https://picsum.photos/id/${Math.floor(
              Math.random() * 234
            )}/200/300`,
          });
        }
        let nativeElement = images[i];
        const responseElement = photos.photoCards[i];

        if (!responseElement || nativeElement.ad) {
          newImages.push(nativeElement);
          continue;
        }

        nativeElement = {
          ...nativeElement,
          name: responseElement.establishment.name,
          // link: `https://picsum.photos/${Math.floor(Math.random() * 200)}/500`,
          link: responseElement.photos.length
            ? responseElement.photos[0].url
            : "",
          views: responseElement.views,
          photosCount: responseElement.photos.length,
          eventName: responseElement.eventName,
          id: responseElement.id,
          date: responseElement.date,
          // photos: MokPhotos,
          photos: responseElement.photos,
        };
        newImages.push(nativeElement);
        setFinalResponse(newImages);
      }
    }
  }, [photos]);
  return <ImagesList images={photos && finalResponse} />;
};

export default PhotoReport;
