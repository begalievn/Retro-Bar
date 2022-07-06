import { IPhotoCards } from './photo';
import { IVideo } from './video';

export interface IEstablishment {
  id: number;
  logo: string;
  name: string;
  description: string;
  averageCheck: null | number;
  workingHours: string | number;
  contacts:number |string;
  created: string;
  category?: null | string;
  photos?: [];
  photoCards?: IPhotoCards[];
  videoCards?: IVideo[];
  total?: number;
  take?: number;
  page?: number;
}
