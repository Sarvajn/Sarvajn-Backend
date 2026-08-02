import { StatusCodes } from "http-status-codes";
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
    super(StatusCodes.NOT_FOUND, message, options);
  }
}