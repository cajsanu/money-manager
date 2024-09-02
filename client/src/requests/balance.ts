import axios from "axios";
const URL = "/api/balance";

export const getBalance = async () => {
  try {
    const res = await axios.get(URL);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

interface UpdateBalanceProps {
  amount: number;
  action: string;
}

export const updateBalance = async ({ amount, action }: UpdateBalanceProps) => {
  try {
    const res = await axios.put(URL, { amount, action });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
