import { IPhoto } from '../apiTypes/photo';

export interface InstitudeCardDataTypes {
  id: number;
  photo?: IPhoto;
  logo: string;
  title: string;
  instType?: string;
  location?: string;
  time: string;
  phone: string;
  hotDisPrice?: number;
  saladPrice?: number;
  dessertPrice?: number;
  winePrice?: number;
  stars?: number;
  isActive: boolean;
  isContentBlack: boolean;
  kitchenType?: string;
  rate?: string;
}
