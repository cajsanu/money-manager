import { AddSpending } from "./components/AddSpending";
import { NewDeposit } from "./components/NewDeposit";
import { ShowBalance } from "./components/ShowBalance";
import { ShowSpendings } from "./components/ShowSpendings";

function App() {
  return (
    <div>
      <div>
        <ShowBalance />
      </div>
      <div>
        <ShowSpendings />
      </div>
      <div>
        <NewDeposit />
      </div>
      <div>
        <AddSpending />
      </div>
    </div>
  );
}

export default App;
