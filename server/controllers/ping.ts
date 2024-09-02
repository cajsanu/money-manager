import { Router } from "express";
const router = Router();

router.get("/", async (req, res) => {
  return res.json("pong!");
});

export default router;
