import { ApiError } from "./ApiError";
import type { BaseErrorOptions } from "./BaseError";

/**
 * HTTP 404 Not Found Error.
 */
export class NotFoundError extends ApiError {
  constructor(
    message = "Resource not found",
    options: BaseErrorOptions = {}
  ) {
    super(404, message, options);
  }
}