export interface IBookData {
  id: number;
  text: string;
  title: string;
  image: string;
  phoneNumber: string;
}

export type BookProps = {
  data?: IBookData;
  page: string;
};
