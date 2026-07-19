import { ApiError } from "./ApiError";

/**
 * HTTP 401 Unauthorized Error.
 */
export class UnauthorizedError extends ApiError {
  constructor(
    message = "Unauthorized",
    code?: string,
    details?: unknown,
    cause?: unknown
  ) {
    super(401, message, code, details, cause);
  }
}
