import React from 'react';
import Row from './Row';

const test = [...Array(9)].map(() => Array(9).fill(''));
test[0][0] = 1;
test[1][5] = 8;

const Board = (): JSX.Element => (
  <>
    <div className="board">
      {
        test.map((r: any[]) => (
          <Row vals={r} />
        ))
      }
    </div>
  </>
);

export default Board;
