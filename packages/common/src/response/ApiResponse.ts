/**
 * Generic, immutable API response wrapper.
 */
export class ApiResponse<T> {
  public readonly statusCode: number;
  public readonly success: boolean;
  public readonly message: string | undefined;
  public readonly data: T | undefined;

  constructor(statusCode: number, data?: T, message?: string) {
    this.statusCode = statusCode;
    this.success = statusCode >= 200 && statusCode < 300;
    this.data = data;
    this.message = message;
  }
}
