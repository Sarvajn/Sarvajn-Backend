import { Request, Response, NextFunction } from 'express';
import { z, ZodError } from 'zod';

import { BadRequestError, InternalServerError } from '../errors';

export function validateSchema(schema: z.ZodObject<any, any>) {
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            schema.parse(req);
            next();
        } catch (err) {
            if (err instanceof ZodError) {
                return next(
                    new BadRequestError("Zod Validation Failure", {
                        details: err.issues,
                    })
                )
            } else {
                return next(
                    new InternalServerError()
                )
            }
        } 
    };
}