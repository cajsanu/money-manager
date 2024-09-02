import { useQuery } from "@tanstack/react-query";
import { getBalance } from "./requests/balance";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { NewDeposit } from "./components/NewDeposit";

function App() {

  const result = useQuery({
    queryKey: ["balance"],
    queryFn: getBalance,
  });

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
          <NewDeposit />
        </div>
      </div>
    );
  }
}

export default App;
