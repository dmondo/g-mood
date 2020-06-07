import React from 'react';
import PropTypes from 'prop-types';
import '../style/Square.css';
import { Store } from '../store/Store';

const Square = ({ val, row, col }): JSX.Element => {
  const { state, dispatch } = React.useContext(Store);
  const { currentPuzzle, inputSquare } = state;

  const selected = inputSquare[0] === row && inputSquare[1] === col;
  const inputState = selected ? 'square selected' : 'square';

  const enterVal = (): void => {
    const numHandler = (e: KeyboardEvent) => {
      const pressed = String.fromCharCode(e.keyCode);

      if (!Number.isNaN(Number(pressed))) {
        currentPuzzle[row][col] = pressed;
        dispatch({ type: 'PUZZLE', payload: currentPuzzle });
        dispatch({ type: 'INPUT', payload: [] });
        document.removeEventListener('keydown', numHandler);
      }
    };

    dispatch({ type: 'INPUT', payload: [row, col] });
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
};

Square.defaultProps = {
  val: '',
};

export default Square;
