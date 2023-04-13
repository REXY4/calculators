import { Request, Response, NextFunction } from 'express';
import { ErrorCode } from './error-code';
import { ErrorException } from './error-exception';
import { ErrorModel } from './error-model';

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof ErrorException) {
    console.log('Error is known.');
    res.status(err.status).send({
      statusCode : err.status,
      satus : err.name,
      message : err.message,
    });
  } else {
    // For unhandled errors.
    res.status(500).send({ code: ErrorCode.UnknownError, status: 500 } as ErrorModel);
  }
};
