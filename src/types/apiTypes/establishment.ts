import { IPhotoCards } from "./photo";
import { IVideo } from "./video";

export interface IEstablishment {
  id: number;
  logo: string;
  name: string;
  description: string;
  averageCheck: null | number;
  workingHours: string | number;
  contacts: number | string;
  created: string;
  category?: null | string;
  photos?: [];
  photoCards?: IPhotoCards[];
  videoCards?: IVideo[];
  location: string;
  kitchenType: string;
  rate: number;
}
export interface Establishments {
  establishments: IEstablishment[];
  total?: number;
  take?: number;
  page?: number;
}
