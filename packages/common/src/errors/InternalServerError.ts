import { ApiError } from "./ApiError";

/**
 * HTTP 500 Internal Server Error.
 */
export class InternalServerError extends ApiError {
  constructor(
    message = "Internal server error",
    code?: string,
    details?: unknown,
    cause?: unknown
  ) {
    super(500, message, code, details, cause);
  }
}
