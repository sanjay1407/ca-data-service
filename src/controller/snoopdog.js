import { Router } from "express";
const router = new Router();
import { snoopUrls } from "../mockDb/users";

router.get("/", (req, res) => {
  res.send(snoopUrls);
});

export default router;
