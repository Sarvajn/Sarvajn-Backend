import { RequestHandler } from "express";
import { ParamsDictionary, Query } from "express-serve-static-core";

/**
 * Wraps an asynchronous Express request handler and forwards errors to the next middleware.
 */
export function asyncHandler<
  P = ParamsDictionary,
  ResBody = any,
  ReqBody = any,
  ReqQuery = Query,
  Locals extends Record<string, any> = Record<string, any>
>(
  handler: RequestHandler<P, ResBody, ReqBody, ReqQuery, Locals>
): RequestHandler<P, ResBody, ReqBody, ReqQuery, Locals> {
  return (req, res, next): void => {
    Promise.resolve(handler(req, res, next)).catch(next);
  };
}
