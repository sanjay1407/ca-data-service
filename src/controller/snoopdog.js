import { Router } from "express";
const router = new Router();
import { snoopUrls } from "../mockDb/users";

router.get("/", (req, res) => {
  res.send(snoopUrls);
});

// router.get("/:id", (req, res) => {
//   res.send(user);
// });

export default router;
