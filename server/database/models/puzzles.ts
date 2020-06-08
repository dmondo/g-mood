import mongoose from 'mongoose';

const validPuzzle = (val: (string|number)[][]): boolean => {
  if (!Array.isArray(val) || !Array.isArray(val[0])) { return false; }
  const validChars = ['', 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return val.reduce((accum: boolean, row: (string|number)[]) => (
    accum && row.reduce((rowAccum: boolean, col: string|number) => (
      rowAccum && validChars.indexOf(col) !== -1
    ), true)
  ), true);
};

const puzzleSchema = new mongoose.Schema({
  uuid: String,
  puzzle: { type: Array, validate: validPuzzle },
});

const Puzzle = mongoose.model('Puzzle', puzzleSchema);

export default Puzzle;
