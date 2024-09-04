import { Box } from "@mui/system";
import { AddSpending } from "./components/AddSpending";
import { NewDeposit } from "./components/NewDeposit";
import { ShowBalance } from "./components/ShowBalance";
import { ShowSpendings } from "./components/ShowSpendings";
import { Alerts } from "./components/Alert";

function App() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: 10,
      }}
    >
      <Alerts />
      <Box>
        <ShowBalance />
      </Box>
      <Box>
        <ShowSpendings />
      </Box>
      <Box>
        <NewDeposit />
      </Box>
      <Box>
        <AddSpending />
      </Box>
    </Box>
  );
}

export default App;
