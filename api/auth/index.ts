import { app, database } from "./src/app"
import { config } from "./config"
import { initializeCollections } from "./src/db";
import { logger } from "./src/utils/logger";


(async function bootstrap() {
  // Initialize Database Connection
  await database.connect();
  logger.info("Database Connection Successful")

  // Get Database Object
  const db = database.getDatabase();

  // Initialize all Collections
  await initializeCollections(db);
  logger.info("Initialied collections for Auth-Service")

  app.listen(config.env.PORT, () => {
    logger.info(`Auth Service Started on Port ${config.env.PORT}`)
  })
})()