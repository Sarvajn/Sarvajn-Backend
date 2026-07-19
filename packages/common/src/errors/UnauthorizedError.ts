import { ApiError } from "./ApiError";
import type { BaseErrorOptions } from "./BaseError";

/**
 * HTTP 401 Unauthorized Error.
 */
export class UnauthorizedError extends ApiError {
  constructor(
    message = "Unauthorized",
    options: BaseErrorOptions = {}
  ) {
    super(401, message, options);
  }
}
