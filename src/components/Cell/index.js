import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { changeCellValue, addFocus, removeFocus } from 'src/actions';

import './styles.scss';

export default function Cell({ boxKey, cell, onFocus }) {
  const dispatch = useDispatch();

  const getClassName = () => {
    let className = 'cell';
    if (boxKey === onFocus.box || cell.row === onFocus.row || cell.col === onFocus.col) {
      className += ' cell--onFocus';
    }
    if (cell.locked) {
      className += ' cell--locked';
    }
    return className;
  };

  return (
    <div
      className={getClassName()}
      cell_row={cell.row}
      cell_col={cell.col}
      onClick={() => {
        if (cell.locked) return;
        dispatch(changeCellValue(boxKey, cell.key));
      }}
      onMouseEnter={() => dispatch(addFocus(boxKey, cell.row, cell.col))}
      onMouseLeave={() => dispatch(removeFocus())}
    >
      {cell.content === 0 ? '' : cell.content}
    </div>
  );
}

Cell.propTypes = {
  boxKey: PropTypes.number.isRequired,
  cell: PropTypes.shape({
    key: PropTypes.number.isRequired,
    row: PropTypes.number.isRequired,
    col: PropTypes.number.isRequired,
    content: PropTypes.number.isRequired,
    locked: PropTypes.bool.isRequired,
  }).isRequired,
  onFocus: PropTypes.shape({
    box: PropTypes.number.isRequired,
    row: PropTypes.number.isRequired,
    col: PropTypes.number.isRequired,
  }).isRequired,
};
