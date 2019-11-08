/* eslint-disable no-console */
import "babel-polyfill";
import path from "path";
import cors from "cors";
import express from "express";
import bodyParser from "body-parser";

import router from "./src/controller";
import logger from "./src/middleware/logger";
import { port } from "./constants";
const app = express();

const publicDir = path.resolve(__dirname, "dist");
const loggerDir = path.resolve(__dirname, "log");

app.use(express.static(publicDir));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(logger("combined", loggerDir));

app.use("/", router);

app.listen(port, () => {
  console.log(`Environment: ${app.get("env")}`);
  console.log(`Logger Dir: ${loggerDir}`);
  console.log(`Public Dir: ${publicDir}`);
  console.log(`Started on port ${port}`);
});

export default app;
