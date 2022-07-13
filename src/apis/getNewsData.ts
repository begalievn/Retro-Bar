import axios from "axios";
import { API } from "../utils/helpers/Consts";

export const getNewsData = () => {
  console.log("Запрос на  бэк:");
  return async () => {
    return await axios.get(`${API}advertisement?take=3&page=0`).then((res) => {
      return res.data.advertisements;
    });
  };
};
