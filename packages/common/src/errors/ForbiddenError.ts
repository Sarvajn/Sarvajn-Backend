import { ApiError } from "./ApiError";
import type { BaseErrorOptions } from "./BaseError";

/**
 * HTTP 403 Forbidden Error.
 */
export class ForbiddenError extends ApiError {
  constructor(
    message = "Forbidden",
    options: BaseErrorOptions = {}
  ) {
    super(403, message, options);
  }
}
