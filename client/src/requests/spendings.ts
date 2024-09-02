import axios from "axios";
const URL = "/api/spendings";

export const getSpendings = async () => {
  try {
    const res = await axios.get(URL);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const updateSpendings = async (amount: number) => {
  try {
    const res = await axios.put(URL, amount);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
