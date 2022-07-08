export interface PalaroidCardTypes {
  image?: PalaroidCardImageType;
  title: string;
  description: string;
  date: string;
}

export interface PalaroidCardImageType {
  id: number;
  url: string;
  created: string;
}
