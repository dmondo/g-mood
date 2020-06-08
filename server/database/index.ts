import mongoose from 'mongoose';
import Puzzle from './models/puzzles';

const cnx = process.env.MONGODB || 'mongodb://localhost/sudokuJS';
mongoose.connect(cnx);

const findAllPuzzles = async (callback: IExpressCB): Promise<void> => {
  try {
    const puzzles = await Puzzle.find({});
    callback(null, puzzles.map((doc: mongoose.Document) => doc.toObject()));
  } catch (err) {
    callback(err);
  }
};

const findPuzzle = async (uuid: string, callback: IExpressCB): Promise<void> => {
  try {
    const puzzle = await Puzzle.find({ uuid });
    callback(null, puzzle.map((doc: mongoose.Document) => doc.toObject()));
  } catch (err) {
    callback(err);
  }
};

const savePuzzle = async (data: IPuzzle, callback: IExpressCB): Promise<void> => {
  try {
    let puzzle = new Puzzle();
    puzzle = Object.assign(puzzle, data);
    await puzzle.save();
    callback(null);
  } catch (err) {
    callback(err);
  }
};

export { findAllPuzzles, findPuzzle, savePuzzle };
