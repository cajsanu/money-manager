import { getBalance } from "../requests/balance";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useQuery } from "@tanstack/react-query";

export const ShowBalance = () => {
  const { data: balance, isLoading } = useQuery({
    queryKey: ["balance"],
    queryFn: getBalance,
  });

  if (isLoading) {
    return <div>loading data...</div>;
  }

  return (
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
        {balance || balance === 0 ? (
          <Typography>Current balance: {balance}</Typography>
        ) : null}
      </Box>
    </div>
  );
};
