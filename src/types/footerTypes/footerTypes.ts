import { IContacts } from "../apiTypes/contacts";

export interface IFooterItems {
  title: string;
  path: string;
}

export interface IIcons {
  icon: string;
  path: string;
}
export interface IContactsPhotos {
  created: string;
  id: number;
  url: string;
}

export interface IContactsObject {
  contacts: IContacts[];
  page: number;
  take: number;
  total: number;
}
