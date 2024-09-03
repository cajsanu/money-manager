import { TextField, Typography } from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { updateBalance } from "../requests/balance";
import { BaseButton } from "./Button";
import { NumberAmount } from "../utils";
import { Box } from "@mui/system";

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

    if (
      window.confirm(`Are you sure you want to add ${numberdAmount}€ to your balance?`)
    ) {
      if (numberdAmount && numberdAmount > 0) {
        await newDepositMutation.mutateAsync({
          amount: numberdAmount,
          action: "add",
        });
      } else {
        window.alert(
          "Amount must be a valid number with no special characters"
        );
      }
      setAmount("");
    }
  };
  return (
    <Box sx={{margin: 4}}>
      <Typography>Make a new deposit:</Typography>
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
        <BaseButton text="Confirm" />
      </form>
    </Box>
  );
};
