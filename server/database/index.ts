import mongoose from 'mongoose';
import Puzzle from './models/puzzles';
import User from './models/users';

const cnx = process.env.MONGODB || 'mongodb://localhost/sudokuJS';

// TODO if err, remove obj and research
mongoose.connect(cnx, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const findAllPuzzles = async (callback: IPuzzleCB): Promise<void> => {
  try {
    const puzzles = await Puzzle.find({});
    callback(null, puzzles.map((doc: mongoose.Document) => doc.toObject()));
  } catch (err) {
    callback(err);
  }
};

const findPuzzle = async (uuid: string, callback: IPuzzleCB): Promise<void> => {
  try {
    const puzzle = await Puzzle.find({ uuid });
    callback(null, puzzle.map((doc: mongoose.Document) => doc.toObject()));
  } catch (err) {
    callback(err);
  }
};

const savePuzzle = async (data: IPuzzle, callback: IPuzzleCB): Promise<void> => {
  try {
    let puzzle = new Puzzle();
    puzzle = Object.assign(puzzle, data);
    await puzzle.save();
    callback(null);
  } catch (err) {
    callback(err);
  }
};

const saveUser = async (data: IUser, callback: IUserCB): Promise<void> => {
  try {
    let user = new User();
    user = Object.assign(user, data);
    await user.save();
    callback(null);
  } catch (err) {
    callback(err);
  }
};

const findUser = async (email: string, callback: IUserCB): Promise<void> => {
  try {
    const user = await User.find({ email });
    callback(null, user.map((doc: mongoose.Document) => doc.toObject()));
  } catch (err) {
    callback(err);
  }
};

export {
  findAllPuzzles,
  findPuzzle,
  savePuzzle,
  saveUser,
  findUser,
};
