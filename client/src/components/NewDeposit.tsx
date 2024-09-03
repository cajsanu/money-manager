import { TextField } from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { updateBalance } from "../requests/balance";
import { BaseButton } from "./Button";
import { NumberAmount } from "../utils";

export const NewDeposit = () => {
  const queryClient = useQueryClient();
  const [amount, setAmount] = useState<string>("");

  const newDepositMutation = useMutation({
    mutationFn: updateBalance,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["balance"] });
    },
  });
  const handleNewDeposit = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    const numberdAmount = NumberAmount(amount);

    if (numberdAmount && numberdAmount > 0) {
      await newDepositMutation.mutateAsync({
        amount: numberdAmount,
        action: "add",
      });
    } else {
      window.alert("Amount must be a valid number with no special characters");
    }
    setAmount("");
  };
  return (
    <div>
      <p>Make a new deposit:</p>
      <form onSubmit={handleNewDeposit}>
        <TextField
          label="Enter amount"
          variant="outlined"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          fullWidth
          required
          sx={{
            borderRadius: "10px",
            backgroundColor: "#f5f5f5",
          }}
        />
        <BaseButton text="Confirm"/>
      </form>
    </div>
  );
};
