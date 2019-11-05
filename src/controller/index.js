import { Router } from "express";

const router = Router();
router.get("/", (req, res) => res.send("Welcome to Frontend Social API"));

export default router;
