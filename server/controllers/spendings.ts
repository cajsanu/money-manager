import { Router } from "express";
const router = Router();

let spent = {
  total: 0,
  clothes: 0,
  groceries: 0,
  other: 0,
};

router.get("/", async (req, res) => {
  return res.json(spent);
});

router.put("/", async (req, res) => {
  const body = req.body;
  if (body.amount && body.type) {
    try {
      spent.total += body.amount;
      switch (body.type) {
        case "clothes":
          spent.clothes += body.amount;
          break
        case "groceries":
          spent.groceries += body.amount;
          break;
        case "other":
          spent.other += body.amount;
          break;
        default:
          spent.total += 0;
          break;
      }
    } catch (err) {
      console.log(err);
    }
  }
  return res.json(spent);
});

export default router;
