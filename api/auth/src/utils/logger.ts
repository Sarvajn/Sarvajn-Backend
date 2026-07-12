import { Logger, LogLevel } from "@sarvajn/logger";
import { config } from "../../config";

const logLevel: LogLevel = config.env.NODE_ENV === "production" ? "info" : "debug"

export const logger = new Logger("auth-service", logLevel);