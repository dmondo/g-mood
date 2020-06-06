import React, { useEffect } from 'react';
import Row from './Row';
import { Store } from '../store/Store';

const test = [...Array(9)].map(() => Array(9).fill(''));

test[0][0] = 1;
test[1][5] = 8;

// TODO move to lib
const keys = [];
for (let i = 0; i < 9; i += 1) {
  keys.push(i);
}

const Board = (): JSX.Element => {
  const { state, dispatch } = React.useContext(Store);
  const { currentPuzzle } = state;

  useEffect(() => {
    dispatch({ type: 'PUZZLE', payload: test });
  }, []);

  return (
    <>
      <div className="board">
        {
          currentPuzzle.map((r: any[], i: number) => (
            <Row vals={r} keys={keys} key={keys[i]} rowKey={keys[i]} />
          ))
        }
      </div>
    </>
  );
};

export default Board;
