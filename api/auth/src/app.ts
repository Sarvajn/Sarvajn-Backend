import express, { type Express } from "express";

import logger from "./utils/logger.util.js";

const log = logger({ class: "app" });
const app: Express = express();
app.disable("x-powered-by");

export default app;
