import { Dispatch } from "redux";
let timer: any;
export const startTimer = (dispatch: Dispatch, deleteAlert: any) => {
  clearTimeout(timer);
  timer = setTimeout(() => dispatch(deleteAlert()), 1500);
};
