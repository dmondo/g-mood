import React from 'react';
import PropTypes from 'prop-types';
import '../style/Square.css';
import { Store } from '../store/Store';

const Square = ({ val, row, col }): JSX.Element => {
  const { state, dispatch } = React.useContext(Store);
  const { currentPuzzle } = state;

  const enterVal = (): void => {
    const numHandler = (e) => {
      const pressed = String.fromCharCode(e.keyCode);

      if (!Number.isNaN(Number(pressed))) {
        currentPuzzle[row][col] = pressed;
        dispatch({ type: 'PUZZLE', payload: currentPuzzle });
        document.removeEventListener('keydown', numHandler);
      }
    };

    document.addEventListener('keydown', numHandler);
  };

  return (
    <>
      <button
        className="square"
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
