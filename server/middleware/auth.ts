/* eslint-disable */ // TODO not ideal..., need to extend req object for ts
import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import jwtKey from '../../lib/config';

const auth = (req: Request, res: Response, next: NextFunction): void => {
  try {
    const token = req.header('x-auth-token');
    if (!token) {
      res.status(401).json({ msg: 'no token supplied' });
    } else {
      const decoded = jwt.verify(token, jwtKey.secret);
      // @ts-ignore
      req.user = decoded;
    }
    next();
  } catch (err) {
    res.status(400).json({ msg: 'invalid token' });
  }
};

export default auth;
