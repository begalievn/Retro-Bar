import axios from "axios";
import { API } from "../utils/helpers/Consts";

export const getUserIdDetails = async (id: string | undefined) => {
  console.log("Запрос на  бэк:");

  return await axios.get(`${API}advertisement/${id}`).then((res) => {
    return res.data;
  });
};
