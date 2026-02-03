import "dotenv/config";
import express, { type Express, type Request, type Response } from "express";
const app: Express = express();
app.disable("x-powered-by");

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Admin server started on port ${port}`);
});

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});
