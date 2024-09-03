import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { updateSpendings } from "../requests/spendings";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBalance } from "../requests/balance";

export const AddSpending = () => {
  const queryClient = useQueryClient();
  const [spendingType, setSpendingType] = useState<string>("");
  const [amount, setAmount] = useState<string>("");

  const newSpendingMutation = useMutation({
    mutationFn: updateSpendings,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["spendings"] });
    },
  });

  const newBalanceMutation = useMutation({
    mutationFn: updateBalance,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["balance"] });
    },
  });

  const handleNewSpending = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    let numberAmount = null;
    if (amount.includes(",")) {
      numberAmount = Number(amount.replace(",", "."));
    } else {
      numberAmount = Number(amount);
    }

    if (spendingType && numberAmount) {
      try {
        await newSpendingMutation.mutateAsync({
          amount: numberAmount,
          type: spendingType,
        });
        await newBalanceMutation.mutateAsync({
          amount: numberAmount,
          action: "sub",
        });
      } catch (err) {
        console.log(err);
      }
    } else {
      window.alert(
        "You need to specify both what you spent money on and how much. The amount has to be a valid number."
      );
    }
    setSpendingType("");
    setAmount("");
  };

  return (
    <div>
      <Box sx={{ minWidth: 120, margin: 10 }}>
        <FormControl
          fullWidth
          sx={{ backgroundColor: "white", borderRadius: "10px" }}
        >
          <InputLabel id="demo-simple-select-label">
            What did you spend money on?
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={spendingType}
            label="Age"
            onChange={(e) => setSpendingType(e.target.value)}
          >
            <MenuItem value={"groceries"}>Groceries</MenuItem>
            <MenuItem value={"clothes"}>Clothes</MenuItem>
            <MenuItem value={"other"}>Other</MenuItem>
          </Select>
        </FormControl>
        <form onSubmit={handleNewSpending}>
          <TextField
            label="How much?"
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
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
          >
            Submit
          </Button>
        </form>
      </Box>
    </div>
  );
};
