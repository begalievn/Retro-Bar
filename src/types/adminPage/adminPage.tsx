export interface IFiled {
  title: string;
}
export interface IPage {
  [key: string]: IPageBody;
}
export interface IPageBody {
  title: string;
  add: string;
  addLink: boolean;
  viewersRange: boolean;
  btn: boolean;
  fields: IFiled[];
}
