import winston from "winston";

const LOG_LEVELS = [
    "error",
    "warn",
    "info",
    "debug",
] as const;

export type LogLevel = (typeof LOG_LEVELS)[number];

export type LogContext = Record<string, unknown>;

export class Logger {
    private readonly logger: winston.Logger;

    constructor(
        service: string,
        level: LogLevel = "info"
    ) {
        this.logger = winston.createLogger({
            level,

            defaultMeta: {
                service,
            },

            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.errors({ stack: true }),
                winston.format.json()
            ),

            transports: [
                new winston.transports.Console(),
            ],
        });
    }

    public error(message: string, context?: LogContext): void {
        this.log("error", message, context);
    }

    public warn(message: string, context?: LogContext): void {
        this.log("warn", message, context);
    }

    public info(message: string, context?: LogContext): void {
        this.log("info", message, context);
    }

    public debug(message: string, context?: LogContext): void {
        this.log("debug", message, context);
    }

    private log(
        level: LogLevel,
        message: string,
        context?: LogContext
    ): void {
        this.logger.log({
            level,
            message,
            ...(context && { context }),
        });
    }
}