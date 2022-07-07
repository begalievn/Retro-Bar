import { IEstablishment } from './establishment';
import { Photographer } from './photographer';

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
  photos: IPhoto[];
  establishment: IEstablishment;
}

export interface IPhotos {
  id: number;
  eventName: string;
  views: number|string;
  date: string;
  created: string;
  photos: IPhoto[];
  establishment: IEstablishment;
  photographer: Photographer[];
}
