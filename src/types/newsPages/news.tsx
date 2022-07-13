export interface MyPerson {
  created?: string;
  photo?: string;
  image?: string;
  name: string;
  fon?: string;
  background?: string;
  type?: string;
  description?: string;
  id?: number;
  phoneNumber?: string;
}

export interface Section_adaptiveProps {
  data: MyPerson[];
}
