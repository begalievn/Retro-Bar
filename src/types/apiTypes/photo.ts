import { IEstablishment } from './establishment';
import { IPhotographer } from './photographer';

export interface IPhoto {
  url: string;
  id: number;
  created: string;
}

export interface IPhotoCards {
  id: number;
  eventName: string;
  views: number;
  date: string;
  created: string;
}

export interface IPhotos {
  id: number;
  eventName: string;
  views: number;
  date: string;
  created: string;
  photos: IPhoto[];
  establishment: IEstablishment;
  photographer: IPhotographer[];
}