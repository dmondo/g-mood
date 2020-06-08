import { Request, Response } from 'express';
import { findUser, saveUser } from '../database/index';

const postUser = (req: Request, res: Response): void => {
  console.log('req.body', req.body);
  const { username, email, password } = req.body;
  console.log('username', username);
  console.log('email', email);
  console.log('password', password);
  if (!username || !email || !password) {
    res.status(400).json({ msg: 'please enter all fields' });
    return;
  }

  saveUser(req.body, (err: Error, type?: string) => {
    if (err) {
      res.sendStatus(500);
    } else if (type === 'exists') {
      console.log('type = exists');
      res.status(400).json({ msg: 'user already exists' });
    } else {
      console.log('type doesnt exist');
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
