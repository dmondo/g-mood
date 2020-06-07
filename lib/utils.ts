const isLegalMove = (board: any[][], row: number, col: number, n: number): boolean => {
  for (let i = 0; i < 9; i += 1) {
    const sRow = 3 * Math.floor(row / 3) + Math.floor(i / 3);
    const sCol = 3 * Math.floor(col / 3) + (i % 3);
    if (board[row][i] === n || board[i][col] === n || board[sRow][sCol] === n) {
      return false;
    }
  }
  return true;
};

const isValidBoard = (brd: any[][]): boolean => {
  const board = brd;
  for (let i = 0; i < 9; i += 1) {
    for (let j = 0; j < 9; j += 1) {
      if (board[i][j] === '') { return false; }
      const k = board[i][j];
      board[i][j] = '';
      if (!isLegalMove(board, i, j, k)) { return false; }
      board[i][j] = k;
    }
  }
  return true;
};

const solveBoard = (board: any[][]): number[][] | boolean => {
  const solved = board;
  for (let i = 0; i < 9; i += 1) {
    for (let j = 0; j < 9; j += 1) {
      if (board[i][j] === '') {
        for (let k = 1; k <= 9; k += 1) {
          if (isLegalMove(board, i, j, k)) {
            solved[i][j] = k;
            if (solveBoard(solved)) { return solved; }
            solved[i][j] = '';
          }
        }
        return false;
      }
    }
  }
  return solved;
};

export { isValidBoard, solveBoard };
