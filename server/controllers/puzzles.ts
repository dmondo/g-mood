import { Request, Response } from 'express';
import { findPuzzle, findAllPuzzles, savePuzzle } from '../database/index';

const postPuzzle = (req: Request, res: Response): void => {
  savePuzzle(req.body, (err: Error) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
};

const getPuzzle = (req: Request, res: Response): void => {
  findPuzzle(req.body, (err: Error, data: IPuzzle[]) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
};

const getPuzzles = (req: Request, res: Response): void => {
  findAllPuzzles((err: Error, data: IPuzzle[]) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
};

export { postPuzzle, getPuzzle, getPuzzles };
