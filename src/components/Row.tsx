import React from 'react';
import PropTypes from 'prop-types';
import Square from './Square';
import '../style/Row.css';

const Row = ({
  vals,
  keys,
  rowKey,
  solved,
}: {
  vals: (string|number)[],
  keys: number[],
  rowKey: number,
  solved: boolean,
}): JSX.Element => (
  <>
    <div className="row">
      {
        vals.map((s: string|number, i: number) => (
          <Square val={s} key={keys[i]} row={rowKey} col={keys[i]} solved={solved} />
        ))
      }
    </div>
  </>
);

Row.propTypes = {
  vals: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ])),
  keys: PropTypes.arrayOf(PropTypes.number).isRequired,
  rowKey: PropTypes.number.isRequired,
  solved: PropTypes.bool.isRequired,
};

Row.defaultProps = {
  vals: Array(9).fill(''),
};

export default Row;
