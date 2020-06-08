import { Request, Response } from 'express';
import { findUser, saveUser } from '../database/index';

const postUser = (req: Request, res: Response): void => {
  saveUser(req.body, (err: Error) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
};

const getUser = (req: Request, res: Response): void => {
  findUser(req.body, (err: Error, data: IUser[]) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
};

export { postUser, getUser };
