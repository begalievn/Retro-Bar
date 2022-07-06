import { IEstablishment } from '../../types/apiTypes/establishment';
import { InstitudeCardDataTypes } from '../../types/institutesSliderTypes/cardTypes';

export function getInstitudeSliderData(data: IEstablishment[]) {
  let result: InstitudeCardDataTypes[] = [];
  result = data.map((item) => ({
    photo: item?.logo,
    logo: item.logo,
    title: item.name,
    instType: item?.category?.toString() || 'bar',
    location: 'location',
    time: item.workingHours.toString(),
    phone: item.contacts.toString(),
    hotDisPrice: 1000,
    saladPrice: 700,
    dessertPrice: 500,
    winePrice: 1000,
    stars: 4.5,
    isActive: false,
    isContentBlack: true,
  }));

  return result;
}