import { TopInstCardsType } from '../../pages/MainPage/components/top-institutions/institutions-slider/InstitutionsSlider';
import { IEstablishment } from '../../types/apiTypes/establishment';

export function getTopInstCardData(establishments: IEstablishment[]) {
  let result: TopInstCardsType[] = [];
  result = establishments.map((item) => ({
    image: item?.photos[0],
    title: item.name,
    time: item.workingHours.toString(),
    phone: item.contacts.toString(),
    location: item.location || 'Bishkek',
  }));
  return result;
}
