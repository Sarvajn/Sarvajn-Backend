import { ApiError } from "./ApiError";

/**
 * HTTP 403 Forbidden Error.
 */
export class ForbiddenError extends ApiError {
  constructor(
    message = "Forbidden",
    code?: string,
    details?: unknown,
    cause?: unknown
  ) {
    super(403, message, code, details, cause);
  }
}
