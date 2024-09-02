import express from "express";
import cors from "cors";
import { PORT } from "./utils/config";
import balanceRouter from "./controllers/balance"

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/balance/", balanceRouter);

const start = async () => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

start();
