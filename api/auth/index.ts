import "dotenv/config";

import app from "./src/app.js";
import { prisma } from "./src/libs/prisma.lib.js";

import logger from "./src/utils/logger.util.js";

const log = logger({});
const PORT = process.env.PORT || 1000;

prisma.$queryRaw`SELECT 1`
  .then(async () => {
    log.info("Database connection established");
    app.listen(PORT, () => {
      log.info(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    log.error(`Failed to connect to the database: ${error}`);
    process.exit(1);
  });
