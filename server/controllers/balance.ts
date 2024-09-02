import { Router } from "express";
const router = Router();

let balance = 0;

router.get("/", async (req, res) => {
  return res.json(balance);
});

router.put("/", async (req, res) => {
  const body = req.body;

  if (body.action) {
    if (body.action === "add") {
      balance += body.amount;
      return res.json(balance);
    } else if (body.action === "sub") {
      balance -= body.amount;
      return res.json(balance);
    } else {
      throw new Error("No suitable action provided");
    }
  }
});

export default router;
