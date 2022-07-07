import axios from "axios";
import { Dispatch } from "redux";
import { IDispatch } from "../store/authorization/AuthFunc";
import { gettingEstablishments } from "../store/features/establishments/establishmentsSlice";

const URL = "http://discoverystudio.xyz:6969";

export const getEstablishments = () => {
  return async (dispatch: Dispatch<IDispatch>) => {
    const result = await axios.get(`${URL}/photo`);
    console.log(result.data);
    dispatch(gettingEstablishments(result.data.establishments));
  };
};
