// import { prisma } from "./libs/prisma.lib.js";

// async function main() {
//   const allUsers = await prisma.user.findMany();
//   console.log("All users:", JSON.stringify(allUsers, null, 2));
// }

// main()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });

import express, { type Express } from "express";

import logger from "./utils/logger.util.js";

const log = logger({ class: "app" });
const app: Express = express();
app.disable("x-powered-by");

// const port = process.env.PORT || 1000;

// app.listen(port, () => {
//   log.info(`Sarvajn Auth Server is running on port ${port}`);
// });

export default app;
