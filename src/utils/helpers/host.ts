import axios from "axios";
import { API } from "./Consts";

const $host = axios.create({
  baseURL: API,
});
export { $host };
