import { ApiError } from "./ApiError";
import type { BaseErrorOptions } from "./BaseError";

/**
 * HTTP 500 Internal Server Error.
 */
export class InternalServerError extends ApiError {
  constructor(
    message = "Internal server error",
    options: BaseErrorOptions = {}
  ) {
    super(500, message, options);
  }
}
