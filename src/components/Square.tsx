import React from 'react';
import PropTypes from 'prop-types';
import '../style/Square.css';

const Square = ({ val }): JSX.Element => {
  const enterVal = (num: number): void => {
    // keep current puzzle in state, update current puzzle state here
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
};

Square.defaultProps = {
  val: '',
};

export default Square;
