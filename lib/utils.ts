const validator = (brd: any[][]): boolean => {
  const board = [...Array(9)].map(() => Array(9).fill(''));
  for (let i = 0; i < 9; i += 1) {
    for (let j = 0; j < 9; j += 1) {
      board[i][j] = brd[i][j];
    }
  }

  const isValidRow = (row: any[]): boolean => (
    row.sort().join('') === '123456789'
  );

  const validRows = board.map((row) => isValidRow(row))
    .reduce((accum, val) => accum && val, true);

  const cols = [...Array(9)].map(() => Array(9).fill(''));
  for (let r = 0; r < 9; r += 1) {
    for (let c = 0; c < 9; c += 1) {
      cols[c][r] = brd[r][c];
    }
  }

  const validCols = cols.map((col) => isValidRow(col))
    .reduce((accum, val) => accum && val, true);

  // square
  let validSquares = true;
  const sections = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];

  sections.forEach((r) => {
    sections.forEach((c) => {
      const square = [];
      r.forEach((y) => {
        c.forEach((x) => {
          square.push(brd[y][x]);
        });
      });
      if (!isValidRow(square)) { validSquares = false; }
    });
  });

  return validRows && validCols && validSquares;
};

const solver = (board: any[][]): number[][] => {

};

export { validator, solver };
