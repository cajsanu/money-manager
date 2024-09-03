import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useQuery } from "@tanstack/react-query";
import { getSpendings } from "../requests/spendings";

export const ShowSpendings = () => {
  const { data: spendings, isLoading } = useQuery({
    queryKey: ["spendings"],
    queryFn: getSpendings,
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
        {spendings || spendings === 0 ? (
          <Typography>Total spendings: {spendings}</Typography>
        ) : null}
      </Box>
    </div>
  );
};
