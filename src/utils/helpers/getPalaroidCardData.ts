import { IPhotoCards } from '../../types/apiTypes/photo';
import { PalaroidCardTypes } from '../../types/mainPageTypes/palaroidCardTypes';

export function getPalaroidCardData(data: IPhotoCards[]) {
  let result: PalaroidCardTypes[] = [];
  result = data.map((item) => ({
    image: item?.photos[0],
    title: item.establishment.name,
    description: item.eventName,
    date: item.date,
  }));
  return result;
}
