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
}

interface PageInner {
  name: string;
  title: string;
}

export enum Pages {
  photo = "photo",
  video = "video",
  advertising = "advertising",
  poster = "poster",
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
