export interface IFiled {
  title: string;
  name: string;
}
export interface IPage {
  [key: string]: IPageBody;
}

export interface IPageBody {
  name?: string;
  title: string;
  add: string;
  innerPage?: PageInner;
  addLink: boolean;
  viewersRange: boolean;
  fields?: IFiled[];
  description?: IFiled[];
  contacts?: IFiled[];
  social?: IFiled[];
}

interface PageInner {
  name: string;
  title: string;
}

export enum Pages {
  contacts = "contacts",
  photo = "photo",
  video = "video",
  advertising = "advertising",
  poster = "poster",
  establishment = "establishment",
}

export interface VideoCard {
  video: string | object;
  establishmentId: number | string;
  eventName: string;
  views: number | string;
  photographerId: number | string;
  date: string;
}
export interface PhotoCard {
  establishmentId: number | string;
  eventName: string;
  views: number | string;
  photographerId: number | string;
  date: string;
  photos: object;
}

export interface AlertBody {
  message: string;
  type: string;
}

export interface Establishment {
  logo: string | object;
  name: string;
  description: string;
  workingHours: string;
  contacts: string;
  category: number;
}
