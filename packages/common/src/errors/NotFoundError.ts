import { ApiError } from "./ApiError";

/**
 * HTTP 404 Not Found Error.
 */
export class NotFoundError extends ApiError {
  constructor(
    message = "Resource not found",
    code?: string,
    details?: unknown,
    cause?: unknown
  ) {
    super(404, message, code, details, cause);
  }
}
