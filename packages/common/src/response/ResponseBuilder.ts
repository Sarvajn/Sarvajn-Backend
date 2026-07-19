import { ApiResponse } from "./ApiResponse";

/**
 * Reusable factory class for constructing ApiResponse instances.
 * Designed to be open for extension by individual microservices.
 */
export class ResponseBuilder {
  public static success<T>(data?: T, message?: string): ApiResponse<T> {
    return new ApiResponse<T>(200, data, message);
  }

  public static created<T>(data?: T, message?: string): ApiResponse<T> {
    return new ApiResponse<T>(201, data, message);
  }

  public static accepted<T>(data?: T, message?: string): ApiResponse<T> {
    return new ApiResponse<T>(202, data, message);
  }

  public static noContent(message?: string): ApiResponse<void> {
    return new ApiResponse<void>(204, undefined, message);
  }

  public static failure(message: string, statusCode = 400): ApiResponse<never> {
    return new ApiResponse<never>(statusCode, undefined, message);
  }
}
