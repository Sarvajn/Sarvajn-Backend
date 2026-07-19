import { Request, Response, NextFunction, RequestHandler } from "express";
import { NotFoundError } from "../errors/NotFoundError";

/**
 * Middleware to forward a NotFoundError when a route is not matched.
 */
export const notFoundHandler: RequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  next(new NotFoundError());
};
