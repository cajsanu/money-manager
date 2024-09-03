import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

export const AddSpending = () => {
  const [spendingType, setSpendingType] = useState<string>("");
  const [amount, setAmount] = useState<string>("");

  const handleNewSpending = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (spendingType && amount) {
        console.log(spendingType, amount)
    } else {
        window.alert("You need to specify both what you spent money on and how much")
    }
    setSpendingType("");
    setAmount("");
  }

  return (
    <div>
      <Box sx={{ minWidth: 120, margin: 10 }}>
        <FormControl fullWidth sx={{ backgroundColor: "white", borderRadius: "10px", }}>
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
