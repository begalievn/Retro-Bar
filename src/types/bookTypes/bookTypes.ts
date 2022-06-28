export interface IBookData {
  text: string;
  title: string;
  image: string;
}

export type BookProps = {
  data?: IBookData;
  page: string;
};
