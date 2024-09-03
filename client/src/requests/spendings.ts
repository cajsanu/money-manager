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

interface UpdateSpendingsProps {
    amount: number;
    type: string;
  }

export const updateSpendings = async ({amount, type}: UpdateSpendingsProps) => {
  try {
    const res = await axios.put(URL, {amount, type});
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
