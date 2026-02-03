import "dotenv/config";
import express, { type Express, type Request, type Response } from "express";
const app: Express = express();

const port = process.env.PORT || 2000;

app.listen(port, () => {
  console.log(`App server started on port ${port}`);
});

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});
