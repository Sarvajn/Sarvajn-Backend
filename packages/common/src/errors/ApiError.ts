import { BaseError, type BaseErrorOptions } from "./BaseError";

/**
 * Generic HTTP API Error.
 */
export class ApiError extends BaseError {
  constructor(
    statusCode: number,
    message: string,
    options: BaseErrorOptions = {}
  ) {
    super(statusCode, message, options);
  }
}