import React from "react";

export interface IField {
  title: string;
  name: string;
  type?: string;
  color?: string;
  errorMessage?: string;
  required?: boolean;
  pattern?: string;
  icon?: React.ReactNode;
  search?: boolean;
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
  fields?: IField[];
  description?: IField[];
  contacts?: IField[];
  social?: IField[];
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
  video: string | object | null;
  establishmentId: number | string;
  eventName: string;
  views: number | string;
  photographerId: number | string;
  date: string;
}
export interface PhotoCard {
  establishmentId: string;
  eventName?: string;
  views?: number | string;
  photographerId: number | string;
  date?: string;
  photos?: object | null;
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

export type AdminPageTypes = PhotoCard | VideoCard | Establishment;
