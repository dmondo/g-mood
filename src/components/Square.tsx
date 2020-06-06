import React from 'react';
import PropTypes from 'prop-types';
import '../style/Square.css';
import { Store } from '../store/Store';

const Square = ({ val, row, col }): JSX.Element => {
  const { state, dispatch } = React.useContext(Store);
  const { currentPuzzle } = state;

  const enterVal = (num: number): void => {
    console.log('currentpuzzle', currentPuzzle);
    currentPuzzle[row][col] = num;
    dispatch({ type: 'PUZZLE', payload: currentPuzzle });
  };

  return (
    <>
      <button
        className="square"
        type="button"
        onClick={() => enterVal(1)}
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
