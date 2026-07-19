import { ApiError } from "./ApiError";

/**
 * HTTP 409 Conflict Error.
 */
export class ConflictError extends ApiError {
  constructor(
    message = "Conflict",
    code?: string,
    details?: unknown,
    cause?: unknown
  ) {
    super(409, message, code, details, cause);
  }
}
