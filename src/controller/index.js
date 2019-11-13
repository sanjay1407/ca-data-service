import { Router } from "express";
import snoopdog from "./snoopdog";

const router = Router();
router.get("/", (req, res) => res.send("Welcome to Fake API server"));
router.use("/snoopdog", snoopdog);

export default router;
