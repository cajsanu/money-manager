export const NumberAmount = (amount: string) => {
  let numberAmount = null;
  if (amount.includes(",")) {
    numberAmount = Number(amount.replace(",", "."));
  } else {
    numberAmount = Number(amount);
  }
  return numberAmount;
};
