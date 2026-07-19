import { Request, Response, NextFunction, ErrorRequestHandler } from "express";
import { BaseError } from "../errors/BaseError";

/**
 * Global error handler middleware for Express.
 * Formats errors into a unified JSON structure and avoids leaking stack traces.
 */
export const errorHandler: ErrorRequestHandler = (
  err: unknown,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
): void => {
  if (err instanceof BaseError) {
    res.status(err.statusCode).json({
      success: false,
      message: err.message,
    });
    return;
  }

  res.status(500).json({
    success: false,
    message: "Internal server error",
  });
};
