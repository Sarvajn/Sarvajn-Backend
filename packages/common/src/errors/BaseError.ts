export interface BaseErrorOptions {
  code?: string;
  details?: unknown;
  cause?: unknown;
}

export abstract class BaseError extends Error {
  public readonly statusCode: number;
  public readonly code?: string;
  public readonly details?: unknown;

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