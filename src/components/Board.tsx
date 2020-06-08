import React from 'react';
import PropTypes from 'prop-types';
import Row from './Row';
import { Store } from '../store/Store';

// TODO move to lib
const keys = [];
for (let i = 0; i < 9; i += 1) {
  keys.push(i);
}

const Board = ({ solved }: { solved: boolean }): JSX.Element => {
  const { state } = React.useContext(Store);
  let puzzle = state.currentPuzzle;
  if (solved) {
    puzzle = state.solution;
  }

  return (
    <>
      <div className="board">
        {
          puzzle.map((r: (string|number)[], i: number) => (
            <Row vals={r} keys={keys} key={keys[i]} rowKey={keys[i]} solved={solved} />
          ))
        }
      </div>
    </>
  );
};

Board.propTypes = {
  solved: PropTypes.bool.isRequired,
};

export default Board;
