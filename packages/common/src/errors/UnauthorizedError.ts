import { StatusCodes } from "http-status-codes";
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
    super(StatusCodes.UNAUTHORIZED, message, options);
  }
}
