import winston from "winston";

const { combine, timestamp, printf, colorize } = winston.format;

// Custom log format
const logFormat = printf(
  ({ level, message, timestamp, service, file, ...metadata }) => {
    const fileOrClass = file || metadata.class;
    const prefix = fileOrClass ? ` [${fileOrClass}]` : "";
    return `[${timestamp}] [${level.toUpperCase()}] [${service}]${prefix} ${message}`;
  },
);

const baseLogger = winston.createLogger({
  level: "info",
  format: combine(timestamp({ format: "YYYY-MM-DD HH:mm:ss" }), logFormat),
  defaultMeta: { service: "sarvajn-auth" },
  transports: [
    new winston.transports.File({ filename: "error.log", level: "error" }),
    new winston.transports.File({ filename: "combined.log" }),
    new winston.transports.Console({
      format: combine(
        colorize(),
        timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
        logFormat,
      ),
    }),
  ],
});

const logger = (meta: { file?: string; class?: string }) =>
  baseLogger.child(meta);

export default logger;
