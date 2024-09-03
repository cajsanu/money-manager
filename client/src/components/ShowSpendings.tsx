import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useQuery } from "@tanstack/react-query";
import { getSpendings } from "../requests/spendings";

interface SpentProp {
  type: string;
  amount: number;
}

const Spent = ({ type, amount }: SpentProp) => {
  const boxStyle = {
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "10px 20px",
    backgroundColor: "#f5f5f5",
    margin: 2,
    color: "purple"
  };

  amount = Number(amount.toFixed(2));

  if (type === "total") {
    return (
      <Box sx={boxStyle}>
        <Typography>Total spendings: {amount}€</Typography>
      </Box>
    );
  }

  return (
    <Box sx={boxStyle}>
      <Typography>
        On {type}: {amount}€
      </Typography>
    </Box>
  );
};

interface Spendings {
  [key: string]: number;
}

export const ShowSpendings = () => {
  const boxStlye = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  };

  const { data: spendings, isLoading } = useQuery<Spendings>({
    queryKey: ["spendings"],
    queryFn: getSpendings,
  });

  if (isLoading) {
    return <div>loading data...</div>;
  }

  return (
    <Box sx={boxStlye}>
      {spendings
        ? Object.entries(spendings).map(([type, amount]) => (
            <Spent key={type} type={type} amount={amount} />
          ))
        : null}
    </Box>
  );
};
