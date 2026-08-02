import { StatusCodes } from "http-status-codes";
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
    super(StatusCodes.BAD_REQUEST, message, options);
  }
}