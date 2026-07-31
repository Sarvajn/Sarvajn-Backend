import { StatusCodes } from "http-status-codes";
import { ApiError } from "./ApiError";

import type { BaseErrorOptions } from "./BaseError";

/**
 * HTTP 409 Conflict Error.
 */
export class ConflictError extends ApiError {
  constructor(
    message = "Conflict",
    options: BaseErrorOptions = {}
  ) {
    super(StatusCodes.CONFLICT, message, options);
  }
}
