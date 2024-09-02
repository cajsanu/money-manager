import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getBalance, updateBalance } from "./requests/balance";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

function App() {
  const queryClient = useQueryClient();
  const result = useQuery({
    queryKey: ["balance"],
    queryFn: getBalance,
  });

  const newDepositMutation = useMutation({
    mutationFn: updateBalance,
    onSuccess: () => {
      console.log("success")
      queryClient.invalidateQueries({ queryKey: ["balance"] });
    },
  });

  const handleNewDeposit = async () => {
    await newDepositMutation.mutateAsync({ amount: 100, action: "add" });
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
          <Button onClick={handleNewDeposit}>Deposit money</Button>
        </div>
      </div>
    );
  }
}

export default App;
