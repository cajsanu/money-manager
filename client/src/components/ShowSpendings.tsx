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
    display: "inline-block",
    backgroundColor: "#f5f5f5",
    color: "red",
  };

  amount = Number(amount.toFixed(2))

  if (type === "total") {
    return (
      <div>
      <Box sx={boxStyle}>
        <Typography>
          Amout of money spent in {type}: {amount}
        </Typography>
      </Box>
    </div>
    )
  }

  return (
    <div>
      <Box sx={boxStyle}>
        <Typography>
          Amout of money spent on {type}: {amount}
        </Typography>
      </Box>
    </div>
  );
};

interface Spendings {
  [key: string]: number;
}

export const ShowSpendings = () => {
  const { data: spendings, isLoading } = useQuery<Spendings>({
    queryKey: ["spendings"],
    queryFn: getSpendings,
  });

  if (isLoading) {
    return <div>loading data...</div>;
  }

  return (
    <div>
      {spendings
        ? Object.entries(spendings).map(([type, amount]) => (
            <Spent key={type} type={type} amount={amount} />
          ))
        : null}
    </div>
  );
};
