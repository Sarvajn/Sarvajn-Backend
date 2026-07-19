/**
 * Base abstract error class for all application errors.
 * Preserves the stack trace and automatically sets the error class name.
 */
export abstract class BaseError extends Error {
  public readonly statusCode: number;
  public readonly code?: string | undefined;
  public readonly details?: unknown | undefined;
  override readonly cause?: unknown | undefined;

  constructor(
    statusCode: number,
    message: string,
    code?: string,
    details?: unknown,
    cause?: unknown
  ) {
    super(message);
    this.statusCode = statusCode;
    this.code = code;
    this.details = details;
    this.cause = cause;
    this.name = this.constructor.name;

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}
