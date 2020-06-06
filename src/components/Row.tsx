import React from 'react';
import PropTypes from 'prop-types';
import Square from './Square';
import '../style/Row.css';

const Row = ({ vals }): JSX.Element => (
  <>
    <div className="row">
      {
        vals.map((s: any) => (
          <Square val={s} />
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
};

Row.defaultProps = {
  vals: Array(9).fill(''),
};

export default Row;
