import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
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

const saveUser = async (data: IUser, callback: ISaveUser): Promise<void> => {
  console.log('data in db', data);
  const { username, email, password } = data;
  try {
    const userExists = await User.findOne({ email });
    console.log('userExists', userExists);
    if (userExists) {
      callback(null, 'exists');
      return;
    }

    console.log('CONTINUING??');

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const newUser = { username, email, password: hash };

    console.log('newUser', newUser);

    let user = new User();
    user = Object.assign(user, newUser);
    console.log('user', user);
    console.log('SAVING');
    await user.save();
    callback(null, 'saved');
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
