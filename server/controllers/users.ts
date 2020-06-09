import { Request, Response } from 'express';
import { findUser, saveUser } from '../database/index';

const postUser = (req: Request, res: Response): void => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400).json({ msg: 'please enter all fields' });
    return;
  }

  saveUser(req.body, (err: Error, token?: string) => {
    if (err) {
      res.sendStatus(500);
    } else if (token === 'exists') {
      res.status(400).json({ msg: 'user already exists' });
    } else {
      res.status(200).json(token);
    }
  });
};

const postAuth = (req: Request, res: Response): void => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({ msg: 'please enter all fields' });
    return;
  }

  findUser(req.body, (err: Error, data: IJWT, type: string) => {
    if (err) {
      res.sendStatus(500);
    } else if (type === 'badUser') {
      res.status(400).json({ mgs: 'incorrect login info' });
    } else {
      res.json(data);
    }
  });
};

export { postUser, postAuth };
