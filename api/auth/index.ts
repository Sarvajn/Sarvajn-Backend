import "dotenv/config";
import express, { type Express, type Request, type Response } from "express";
const app: Express = express();

const port = process.env.PORT || 1000;

app.listen(port, () => {
  console.log(`Auth server started on port ${port}`);
});

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});
