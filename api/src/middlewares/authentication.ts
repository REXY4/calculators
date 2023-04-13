import { NextFunction, Request, Response } from 'express';
import { ErrorCode } from '../exceptions/error-code';
import { ErrorException } from '../exceptions/error-exception';
import jwt from 'jsonwebtoken';

interface CustomRequest extends Request {
  id : number
}

export const authentication = (req : CustomRequest, res : Response, next : NextFunction) => {
  try {
    const header = req.headers.authorization;
    const token = header && header.replace('Bearer ', '');
    if (!token) {
      throw new ErrorException(ErrorCode.Validation, 'authentication failed')
    }
    const secretKey = process.env.SECRET_KEY;
    const verified:any = jwt.verify(token, secretKey);
    req.id = Number(verified.id);
    next();
  } catch (error) {
    res.status(500).send({
      statusCode: 500,
      status: 'failed',
      message: error.message,
    });
  }
};
