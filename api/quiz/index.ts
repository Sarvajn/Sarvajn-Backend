import "dotenv/config";
import express, { type Express, type Request, type Response } from "express";
const app: Express = express();

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Quiz server started on port ${port}`);
});

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});
