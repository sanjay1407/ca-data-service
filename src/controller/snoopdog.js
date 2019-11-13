import { Router } from "express";
const router = new Router();
import { getSnoopUrls } from "../mockDb/snoopUrls";
const congelador = "congelador-industrial-horizontal-203-litros-blanco";
const frague = "frague-Rose-1-kilo";

router.get("/", (req, res) => {
  let key;
  const { name } = req.query;
  let snoopUrls = [];
  if (name === congelador) {
    key = "congelador";
  } else if (name === frague) {
    key = "frague";
  }
  snoopUrls = getSnoopUrls(key);
  res.send(snoopUrls);
});

export default router;
