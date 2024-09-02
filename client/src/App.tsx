import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getBalance, updateBalance } from "./requests/balance";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button, TextField } from "@mui/material";
import { useState } from "react";

function App() {
  const queryClient = useQueryClient();
  const [amount, setAmount] = useState<string>("");

  const result = useQuery({
    queryKey: ["balance"],
    queryFn: getBalance,
  });

  const newDepositMutation = useMutation({
    mutationFn: updateBalance,
    onSuccess: () => {
      console.log("success");
      queryClient.invalidateQueries({ queryKey: ["balance"] });
    },
  });

  const handleNewDeposit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (Number(amount) && Number(amount) > 0) {
      await newDepositMutation.mutateAsync({
        amount: Number(amount),
        action: "add",
      });
    } else {
      window.alert("Amount must be a valid number with no special characters");
    }
    setAmount("")
  };

  if (result.isLoading) {
    return <div>loading data...</div>;
  }

  if (result.data || result.data === 0) {
    const balance: number = result.data;

    return (
      <div>
        <div>
          <Box
            sx={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "10px 20px",
              display: "inline-block",
              backgroundColor: "#f5f5f5",
              color: "red",
            }}
          >
            <Typography>Current accout balance: {balance}</Typography>
          </Box>
        </div>
        <div>
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
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
