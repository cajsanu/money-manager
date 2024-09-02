import { Router } from "express";
const router = Router();

let spent = 0;

router.get("/", async (req, res) => {
  return res.json(spent);
});

router.put("/", async (req, res) => {
  spent += req.body.amount;
  return res.json(spent);
});

export default router;
