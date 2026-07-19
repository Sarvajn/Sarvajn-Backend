export interface BaseErrorOptions {
  code?: string;
  details?: unknown;
  cause?: unknown;
}

/**
 * Base abstract error class for all application errors.
 * Preserves the stack trace and automatically sets the error class name.
 */
export abstract class BaseError extends Error {
  public readonly statusCode: number;
  public readonly code: string | undefined;
  public readonly details: unknown;

  constructor(
    statusCode: number,
    message: string,
    options: BaseErrorOptions = {}
  ) {
    super(message, { cause: options.cause });

    this.name = new.target.name;
    this.statusCode = statusCode;
    this.code = options.code;
    this.details = options.details;

    Error.captureStackTrace?.(this, new.target);
  }
}