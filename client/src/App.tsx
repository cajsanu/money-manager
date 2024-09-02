import { useEffect } from "react";
import { Ping } from "./requests/ping";

function App() {

  useEffect(() => {
    const p = async () => {
      const res = await Ping();
      console.log(res)
    };
    p();
  });

  return (
    <div>
      <div>Total balance: 1000</div>
      <div></div>
    </div>
  );
}

export default App;
