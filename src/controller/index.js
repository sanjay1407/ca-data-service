import { Router } from "express";
import snoopdog from "./snoopdog";

const router = Router();
router.get("/", (req, res) => res.send("Welcome to Frontend Social API"));
router.use("/snoopdog", snoopdog);

export default router;
