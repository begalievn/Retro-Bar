export interface Photographer {
  id: number;
  photo: null | string;
  name: string;
  description: string;
  contacts: number;
  created: string;
}

export interface Photographers {
  photographers: Photographer[];
  total: number;
  take: number;
  page: number;
}
