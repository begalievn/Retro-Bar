import { IPhoto, IPhotoCards } from './photo';
import { IVideo } from './video';

export interface IEstablishment {
  id: number;
  logo: string;
  name: string;
  description: string;
  averageCheck: null | number;
  workingHours: string | number;
  contacts: number | string;
  created?: string;
  category: null | string | number;
  kitchenType: null | string;
  services: null | string;
  link: null | string;
  location: null | string;
  rate: number | string;
  photos: IPhoto[];
  photoCards?: IPhotoCards[];
  videoCards?: IVideo[];
}
export interface Establishments {
  establishments: IEstablishment[];
  total?: number;
  take?: number;
  page?: number;
}
