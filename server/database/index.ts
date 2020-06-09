import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Puzzle from './models/puzzles';
import User from './models/users';
import jwtKey from '../../lib/config';

const cnx = process.env.MONGODB || 'mongodb://localhost/sudokuJS';

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
  const { username, email, password } = data;
  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      callback(null, 'exists');
      return;
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const newUser = { username, email, password: hash };

    let user = new User();
    user = Object.assign(user, newUser);
    const savedUser = await user.save();

    console.log('savedUser', savedUser);
    console.log('savedUser.id', savedUser.id);

    const token = await jwt.sign(
      { id: savedUser.id },
      jwtKey.secret,
      { expiresIn: 86400 },
    );

    callback(null, { token });
  } catch (err) {
    callback(err);
  }
};

const findUser = async (data: IVerify, callback: IUserCB): Promise<void> => {
  try {
    const { email, password } = data;
    const user = await User.findOne({ email });

    if (!user) {
      callback(null, null, 'badUser');
      return;
    }

    const compare = await bcrypt.compare(password, user.toObject().password);

    console.log('user', user);
    console.log('user.id', user.id);

    const token = await jwt.sign(
      { id: user.id },
      jwtKey.secret,
      { expiresIn: 86400 },
    );

    if (!compare) {
      callback(null, null, 'badUser');
    } else {
      callback(null, { username: user.toObject().username, token }, 'user');
    }
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
