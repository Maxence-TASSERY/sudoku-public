import PropTypes from 'prop-types';

import './styles.scss';

import Cell from 'src/components/Cell';

export default function Box({ boxKey, cells, onFocus }) {
  const jsxCells = cells.map((cell) => (
    <Cell
      key={cell.key}
      boxKey={boxKey}
      cell={cell}
      onFocus={onFocus}
    />
  ));

  return (
    <div className="box">
      {jsxCells}
    </div>
  );
}

Box.propTypes = {
  boxKey: PropTypes.number.isRequired,
  cells: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.number.isRequired,
  })).isRequired,
  onFocus: PropTypes.shape().isRequired,
};
