import { StatusCodes } from "http-status-codes";
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
    super(StatusCodes.INTERNAL_SERVER_ERROR, message, options);
  }
}
