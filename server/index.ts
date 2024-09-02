import express from "express";
import cors from "cors";
import { PORT } from "./utils/config";
import pingRouter from "./controllers/ping"

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/ping/", pingRouter);

const start = async () => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

start();
