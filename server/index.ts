import express from "express";
import cors from "cors";
import { PORT } from "./utils/config";

const app = express();

app.use(cors());
app.use(express.json());

const start = async () => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

start();
