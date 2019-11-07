import { Router } from "express";
import snoopdog from "./snoopdog";
import sniffdog from "./sniffdog";

const router = Router();
router.get("/", (req, res) => res.send("Welcome to Frontend Social API"));
router.use("/snoopdog", snoopdog);
router.use("/khoj", sniffdog);

export default router;
