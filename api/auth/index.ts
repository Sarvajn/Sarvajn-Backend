import { app, database } from "./src/app"
import { config } from "./config"
import { initializeCollections, syncSeed } from "./src/bootstrap";
import { logger } from "./src/utils/logger";


(async function bootstrap() {
  // Initialize Database Connection
  await database.connect();
  logger.info("Database Connection Successful")

  // Get Database Object
  const db = database.getDatabase();

  // Initialize all Collections
  await initializeCollections(db);
  logger.info("Initialized collections for Auth-Service")

  // Sync Seed Data
  await syncSeed();

  app.listen(config.env.PORT, () => {
    logger.info(`Auth Service Started on Port ${config.env.PORT}`)
  })
})()