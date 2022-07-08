import { IAdvertisement } from '../../types/apiTypes/advertisement';
import { IBookData } from '../../types/bookTypes/bookTypes';

export function getAdvertisementData(data: IAdvertisement[]) {
  let result: IBookData[] = [];
  result = data.map((item) => ({
    id: item.id,
    text: item.description,
    title: item.name,
    image: item.photo,
    phoneNumber: item.phoneNumber,
  }));
  if (Array.isArray(result) && result.length >= 1) {
    return result[0];
  }
  return {
    id: 1,
    text: 'Not assigned',
    title: 'Not assigned',
    image: 'Not assigned',
    phoneNumber: 'Not assigned',
  };
}
