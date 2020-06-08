import React from 'react';
import PropTypes from 'prop-types';
import '../style/Square.css';
import { Store } from '../store/Store';

const Square = ({
  val,
  row,
  col,
  solved,
}: {
  val: string|number,
  row: number,
  col: number,
  solved: boolean,
}): JSX.Element => {
  const { state, dispatch } = React.useContext(Store);
  const { currentPuzzle, inputSquare, listeners } = state;

  const numHandler = (e: KeyboardEvent) => {
    const pressed = String.fromCharCode(e.keyCode);

    if (!Number.isNaN(Number(pressed))) {
      currentPuzzle[row][col] = pressed;
      dispatch({ type: 'PUZZLE', payload: currentPuzzle });
      dispatch({ type: 'INPUT', payload: [] });
      document.removeEventListener('keydown', numHandler);
    }
  };

  const selected = inputSquare[0] === row && inputSquare[1] === col;

  let inputState: string;
  if (selected && solved) {
    inputState = 'square solved';
  } else if (selected) {
    inputState = 'square selected';
  } else {
    inputState = 'square';
  }

  const enterVal = (): void => {
    if (solved) { return; }
    listeners.map((listen: IKeyListener) => ( // TODO type for listener
      document.removeEventListener('keydown', listen)
    ));
    dispatch({ type: 'LISTEN', payload: [] }); // TODO can change state form arr to fnc?
    dispatch({ type: 'INPUT', payload: [row, col] });
    dispatch({ type: 'LISTEN', payload: [...listeners, numHandler] });
    document.addEventListener('keydown', numHandler);
  };

  return (
    <>
      <button
        className={inputState}
        type="button"
        onClick={() => enterVal()}
      >
        {val}
      </button>
    </>
  );
};

Square.propTypes = {
  val: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  row: PropTypes.number.isRequired,
  col: PropTypes.number.isRequired,
  solved: PropTypes.bool.isRequired,
};

Square.defaultProps = {
  val: '',
};

export default Square;
