import { ApiError } from "./ApiError";
import type { BaseErrorOptions } from "./BaseError";

/**
 * HTTP 400 Bad Request Error.
 */
export class BadRequestError extends ApiError {
  constructor(
    message = "Bad Request",
    options: BaseErrorOptions = {}
  ) {
    super(400, message, options);
  }
}