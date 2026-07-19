import { ApiError } from "./ApiError";

/**
 * HTTP 400 Bad Request Error.
 */
export class BadRequestError extends ApiError {
  constructor(
    message = "Bad Request",
    code?: string,
    details?: unknown,
    cause?: unknown
  ) {
    super(400, message, code, details, cause);
  }
}
