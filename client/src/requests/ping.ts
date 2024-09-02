import axios from "axios";
const URL = "/api/ping";

export const Ping = async () => {
  const res = await axios.get(URL);
  return res.data;
};
