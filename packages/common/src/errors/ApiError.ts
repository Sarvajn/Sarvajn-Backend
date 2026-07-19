import { BaseError } from "./BaseError";

/**
 * Generic HTTP API Error.
 */
export class ApiError extends BaseError {
  constructor(
    statusCode: number,
    message: string,
    code?: string,
    details?: unknown,
    cause?: unknown
  ) {
    super(statusCode, message, code, details, cause);
  }
}
